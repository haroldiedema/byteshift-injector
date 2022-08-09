/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

export const DEFAULT_CONTEXT_ID = '__default_context__';

export type AnyConstructor = new (...args: any[]) => any;
export type FactoryOptions = {dependencies: any[], contextId: any};
export type ServiceOptions = {
    isolated: boolean,
    autoload: boolean | ((contextId: any) => boolean),
    factory?: (constructor: AnyConstructor, options: FactoryOptions) => Promise<InstanceType<AnyConstructor>>,
};
