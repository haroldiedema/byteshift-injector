import 'reflect-metadata';
import {AnyConstructor}   from './Types';

export const CollectionMetadataKey = 'custom:byteshift-di:collections';

export function Collection(dependencies: AnyConstructor[])
{
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const collections = Reflect.getMetadata(CollectionMetadataKey, target) ?? {};
        collections[parameterIndex] = dependencies;
        Reflect.defineMetadata(CollectionMetadataKey, collections, target);
    }
}
