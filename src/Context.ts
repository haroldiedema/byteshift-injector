/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import 'reflect-metadata';
import {AnyConstructor, DEFAULT_CONTEXT_ID, ServiceOptions} from './Types';

export class Context
{
    private readonly services: Map<AnyConstructor, InstanceType<AnyConstructor>> = new Map();

    private isCompiled: boolean = false;
    private isDisposed: boolean = false;

    constructor(
        private readonly definitions: Map<AnyConstructor, ServiceOptions>,
        private readonly contexts: Map<any, Context>,
        private readonly contextId: any,
        private readonly onDisposeCallback: () => void,
    )
    {
    }

    /**
     * Returns a service instance by the given ID.
     *
     * @param {T} id
     * @returns {InstanceType<T>}
     */
    public async get<T extends new (...args: any[]) => InstanceType<T>>(id: T): Promise<InstanceType<T>>
    {
        if (this.isDisposed) {
            throw new Error('Cannot grab a service from a disposed container.');
        }

        if (!this.definitions.has(id)) {
            throw new Error(`The service "${id.name}" does not exist.`);
        }

        if (!this.isCompiled) {
            await this.compile();
        }

        const context = this.getContextOf(id);

        if (context.services.has(id)) {
            return context.services.get(id);
        }

        return context === this ? context.compileServiceAsync(id) : context.get(id);
    }

    /**
     * Compiles this context.
     *
     * @returns {Promise<Context>}
     */
    public async compile(): Promise<Context>
    {
        if (this.isCompiled) {
            return;
        }

        const constructors = Array.from(this.definitions.keys());

        for (const constructor of constructors) {
            const options = this.definitions.get(constructor);

            if (typeof options.autoload === 'function') {
                if (false === options.autoload(this.contextId)) {
                    continue;
                }
            } else if (!options.autoload) {
                continue;
            }

            // Determine the appropriate context based on whether this service is
            // isolated or not.
            const context = this.getContextOf(constructor);

            // Skip if the instance from the detected context already exists.
            if (context.services.has(constructor)) {
                continue;
            }

            await this.compileServiceAsync(constructor);
        }

        this.isCompiled = true;

        return this;
    }

    /**
     * Disposes of this context.
     */
    public dispose(): void
    {
        if (this.contextId === null) {
            throw new Error('Root context cannot be disposed of.');
        }

        this.isDisposed = true;

        for (const service of this.services.values()) {
            if (typeof service?.['dispose'] === 'function') {
                service.dispose();
            }
        }

        this.services.clear();
        this.onDisposeCallback();
    }

    /**
     * Compiles a single service and loads the async initialize method.
     *
     * @param {AnyConstructor} constructor
     * @returns {Promise<void>}
     * @private
     */
    private async compileServiceAsync(constructor: AnyConstructor): Promise<InstanceType<AnyConstructor>>
    {
        const service = await this.compileService(constructor);

        if (typeof service['initialize'] !== 'function') {
            return service;
        }

        await service.initialize(this.contextId);

        return service;
    }

    /**
     * Compile a single service.
     *
     * @param {AnyConstructor} constructor
     * @returns {InstanceType<AnyConstructor>}
     * @private
     */
    private async compileService(constructor: AnyConstructor): Promise<InstanceType<AnyConstructor>>
    {
        const options = this.definitions.get(constructor);
        const context = this.getContextOf(constructor);
        const args    = this.resolveArgumentsOf(constructor);

        const instance = options.factory
            ? await options.factory(constructor, {dependencies: args, contextId: this.contextId})
            : new constructor(...this.resolveArgumentsOf(constructor));

        context.services.set(constructor, instance);

        return instance;
    }

    /**
     * Resolves the arguments of the given constructor or method inside the
     * constructor.
     *
     * @param {AnyConstructor}   constructor
     * @param {string|undefined} methodName
     * @returns {any[]}
     * @private
     */
    private resolveArgumentsOf(constructor: AnyConstructor, methodName?: string): any[]
    {
        const args: any[]             = [];
        const params: any[]           = Reflect.getMetadata('design:paramtypes', constructor, methodName) ?? [];
        const options: ServiceOptions = this.definitions.get(constructor);

        let paramIndex: number = 0;
        for (const param of params) {
            ++paramIndex;

            // Ignore unresolved arguments if a factory method was specified.
            if (options.factory && !this.definitions.has(param)) {
                args.push(undefined);
                continue;
            }

            if (!this.definitions.has(param)) {
                throw new Error(`Argument #${paramIndex} of the constructor of class "${constructor.name}" is not a registered service.`);
            }

            if (!options.isolated && this.definitions.get(param).isolated) {
                throw new Error(`A non-isolated service cannot depend on an isolated service.`);
            }

            const paramContext = this.getContextOf(param);

            if (paramContext.services.has(param)) {
                args.push(paramContext.services.get(param));
                continue;
            }

            args.push(paramContext.compileService(param));
        }

        return args;
    }

    /**
     * Returns the appropriate context for the given constructor.
     *
     * @param {AnyConstructor} constructor
     * @returns {Context}
     * @private
     */
    private getContextOf(constructor: AnyConstructor): Context
    {
        if (this.definitions.get(constructor)?.isolated) {
            return this;
        }

        return this.contexts.get(DEFAULT_CONTEXT_ID);
    }
}
