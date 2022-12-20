import 'reflect-metadata';
import { AnyConstructor } from './Types';
export declare const CollectionMetadataKey = "custom:byteshift-di:collections";
export declare function Collection(dependencies: AnyConstructor[]): (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
