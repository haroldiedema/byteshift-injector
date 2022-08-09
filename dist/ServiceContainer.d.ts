import { Context } from './Context';
import { AnyConstructor, ServiceOptions } from './Types';
/**
 * The service host keeps track of registered service definitions and is
 * responsible for compiling services and creating contexts.
 */
declare class Container {
    private readonly definitions;
    private readonly contexts;
    constructor();
    /**
     * Registers the given class constructor as a service.
     *
     * @param {AnyConstructor} constructor
     * @param {ServiceOptions} options
     */
    register(constructor: AnyConstructor, options: ServiceOptions): void;
    /**
     * Compiles the services in the default context.
     *
     * @returns {Promise<Context>}
     */
    compile(): Promise<Context>;
    /**
     * Completely reset the service container.
     * This should only be used for unit-testing purposes.
     */
    reset(): void;
    /**
     * Returns a service container associated with the given context, or the
     * default (global) context if none is provided.
     *
     * @param context
     * @returns {Context}
     */
    of(context?: any): Context;
    /**
     * Returns a service instance from the default (global) context.
     *
     * @param {T} id
     * @returns {InstanceType<T>}
     */
    get<T extends new (...args: any[]) => InstanceType<T>>(id: T): Promise<InstanceType<T>>;
}
export declare const ServiceContainer: Container;
export {};
