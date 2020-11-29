/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2020, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import 'reflect-metadata';
import {ServiceHost} from './ServiceHost';

/**
 * Injects a service instance into the decorated property based on the defined type.
 *
 * @decorator
 */
export function InjectDirect(constructor: any, propertyKey: string)
{
    const type = (Reflect as any).getMetadata('design:type', constructor, propertyKey);

    if (! ServiceHost.has(type)) {
        throw new Error(`The service requested by property "${propertyKey}" of "${constructor.name}" does not exist.`);
    }

    constructor[propertyKey] = ServiceHost.get(type);
}

/**
 * Injects a service instance into the decorated property based on the defined type.
 *
 * The service is retrieved from the service host as soon as the property is accessed.
 *
 * @decorator
 */
export function Inject(constructor: any, propertyKey: string)
{
    const type = (Reflect as any).getMetadata('design:type', constructor, propertyKey);

    if (! ServiceHost.has(type)) {
        throw new Error(`The service requested by property "${propertyKey}" of "${constructor.name}" does not exist.`);
    }

    let _instance: any;

    Object.defineProperty(constructor, propertyKey, {
        configurable: false,
        enumerable: false,
        get: () => {
            if (! _instance) {
                _instance = ServiceHost.get(type);
            }

            return _instance;
        }
    });
}
