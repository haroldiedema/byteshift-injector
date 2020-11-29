/**
 * Registers the given constructor as a service.
 * Use the @Inject annotation on class properties to dynamically inject a singleton instance of the registered service.
 * The property type is used to determine which service instance should be injected.
 *
 * @decorator
 */
export declare function Service(constructor: Function): void;
