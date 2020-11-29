declare class ServiceHostImpl {
    /**
     * Registers the given service.
     *
     * Note that a service constructor should not require any arguments.
     *
     * @param {Function} constructor
     */
    register(constructor: Function): void;
    /**
     * Returns true if a service of the given constructor exists.
     *
     * @param {Function} constructor
     * @returns {boolean}
     */
    has(constructor: Function): any;
    /**
     * Returns an instanced service by the given constructor.
     *
     * @param {Function} constructor
     * @returns {T}
     */
    get<T>(constructor: Function): T;
}
export declare const ServiceHost: ServiceHostImpl;
export {};
