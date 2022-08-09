import { AnyConstructor, ServiceOptions } from './Types';
/**
 * Registers the decorated class as a service.
 *
 * Available options:
 *  - "isolated" : The decorated class is registered as an isolated service,
 *                 meaning that it will be instantiated new for every context.
 *                 This is useful when dealing with user-specific contexts, for
 *                 example an incoming HTTP request in a web server. Any
 *                 non-isolated service will have its existing instance passed
 *                 to the new context.
 *
 *  - "autoload" : The decorated class is automatically instantiated when a new
 *                 context is being created. If the class implements the
 *                 {@link IAsyncService} interface, the "initialize()" method
 *                 will be invoked first. The "context"-object given to the
 *                 {@link ServiceContainer.of} method is passed as the first and
 *                 only argument. If the value of "autoload" is a function, it
 *                 is expected to return a boolean value whether the service
 *                 should autoload or not, based on the given "context"-object
 *                 that was given to the {@link ServiceContainer.of} method.
 *
 *  - "factory" :  A function that accepts the {constructor} and an options
 *                 object containing {@link FactoryOptions.dependencies} and a
 *                 {@link FactoryOptions.contextId}. This function should return
 *                 a Promise with the instance of the given {constructor}.
 */
export declare function Service(options?: Partial<ServiceOptions>): (constructor: AnyConstructor) => void;
