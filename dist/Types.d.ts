export declare const DEFAULT_CONTEXT_ID = "__default_context__";
export declare type AnyConstructor = new (...args: any[]) => any;
export declare type FactoryOptions = {
    dependencies: any[];
    contextId: any;
};
export declare type ServiceOptions = {
    isolated: boolean;
    autoload: boolean | ((contextId: any) => boolean);
    factory?: (constructor: AnyConstructor, options: FactoryOptions) => Promise<InstanceType<AnyConstructor>>;
};
