/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2020, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import {ServiceHost} from './ServiceHost';

/**
 * Registers the given constructor as a service.
 * Use the @Inject annotation on class properties to dynamically inject a singleton instance of the registered service.
 * The property type is used to determine which service instance should be injected.
 *
 * @decorator
 */
export function Service(constructor: Function): void
{
    ServiceHost.register(constructor);
}
