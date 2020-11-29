import 'reflect-metadata';
/**
 * Injects a service instance into the decorated property based on the defined type.
 *
 * @decorator
 */
export declare function InjectDirect(constructor: any, propertyKey: string): void;
/**
 * Injects a service instance into the decorated property based on the defined type.
 *
 * The service is retrieved from the service host as soon as the property is accessed.
 *
 * @decorator
 */
export declare function Inject(constructor: any, propertyKey: string): void;
