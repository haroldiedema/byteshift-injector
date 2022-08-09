import 'reflect-metadata';
import { AnyConstructor, ServiceOptions } from './Types';
export declare class Context {
    private readonly definitions;
    private readonly contexts;
    private readonly contextId;
    private readonly onDisposeCallback;
    private readonly services;
    private isCompiled;
    private isDisposed;
    constructor(definitions: Map<AnyConstructor, ServiceOptions>, contexts: Map<any, Context>, contextId: any, onDisposeCallback: () => void);
    /**
     * Returns a service instance by the given ID.
     *
     * @param {T} id
     * @returns {InstanceType<T>}
     */
    get<T extends new (...args: any[]) => InstanceType<T>>(id: T): Promise<InstanceType<T>>;
    /**
     * Compiles this context.
     *
     * @returns {Promise<Context>}
     */
    compile(): Promise<Context>;
    /**
     * Disposes of this context.
     */
    dispose(): void;
    /**
     * Compiles a single service and loads the async initialize method.
     *
     * @param {AnyConstructor} constructor
     * @returns {Promise<void>}
     * @private
     */
    private compileServiceAsync;
    /**
     * Compile a single service.
     *
     * @param {AnyConstructor} constructor
     * @returns {InstanceType<AnyConstructor>}
     * @private
     */
    private compileService;
    /**
     * Resolves the arguments of the given constructor or method inside the
     * constructor.
     *
     * @param {AnyConstructor}   constructor
     * @param {string|undefined} methodName
     * @returns {any[]}
     * @private
     */
    private resolveArgumentsOf;
    /**
     * Returns the appropriate context for the given constructor.
     *
     * @param {AnyConstructor} constructor
     * @returns {Context}
     * @private
     */
    private getContextOf;
}
