/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import {Context}                                            from './Context';
import {AnyConstructor, DEFAULT_CONTEXT_ID, ServiceOptions} from './Types';

/**
 * The service host keeps track of registered service definitions and is
 * responsible for compiling services and creating contexts.
 */
class Container
{
    private readonly definitions: Map<AnyConstructor, ServiceOptions> = new Map();
    private readonly contexts: Map<any, Context>                      = new Map();

    constructor()
    {
        this.reset();
    }

    /**
     * Registers the given class constructor as a service.
     *
     * @param {AnyConstructor} constructor
     * @param {ServiceOptions} options
     */
    public register(constructor: AnyConstructor, options: ServiceOptions): void
    {
        if (this.definitions.has(constructor)) {
            throw new Error(`Class "${constructor.name}" is already registered.`);
        }

        this.definitions.set(constructor, options);
    }

    /**
     * Compiles the services in the default context.
     *
     * @returns {Promise<Context>}
     */
    public compile(): Promise<Context>
    {
        return this.of().compile();
    }

    /**
     * Completely reset the service container.
     * This should only be used for unit-testing purposes.
     */
    public reset(): void
    {
        this.definitions.clear();
        this.contexts.clear();
        this.contexts.set(DEFAULT_CONTEXT_ID, new Context(this.definitions, this.contexts, null, null));
    }

    /**
     * Returns a service container associated with the given context, or the
     * default (global) context if none is provided.
     *
     * @param context
     * @returns {Context}
     */
    public of(context: any = DEFAULT_CONTEXT_ID): Context
    {
        if (!this.contexts.has(context)) {
            this.contexts.set(context, new Context(this.definitions, this.contexts, context, () => {
                this.contexts.delete(context);
            }));
        }

        return this.contexts.get(context) as Context;
    }

    /**
     * Returns a service instance from the default (global) context.
     *
     * @param {T} id
     * @returns {InstanceType<T>}
     */
    public async get<T extends new (...args: any[]) => InstanceType<T>>(id: T): Promise<InstanceType<T>>
    {
        return this.of().get(id);
    }
}

// Service definitions (configuration) are registered globally.
/* istanbul ignore next */
const _G: any = typeof window !== 'undefined' ? window : global;
const _S      = '__byteshift-injector_2__';

if (typeof _G[_S] === 'undefined') {
    _G[_S] = new Container();
}

export const ServiceContainer: Container = _G[_S];
