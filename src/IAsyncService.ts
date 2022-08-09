/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

export interface IAsyncService
{
    /**
     * Invoked when this service is being compiled.
     *
     * The contextId argument reflects the context argument that was given to
     * the {@link ServiceContainer.on} method.
     *
     * @param contextId
     * @returns {Promise<void>}
     */
    initialize(contextId: any): Promise<void>;
}
