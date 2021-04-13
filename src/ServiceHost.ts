/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2020, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';
declare var global: any;

const _G: any = typeof window !== 'undefined' ? window : global;
const _S      = Symbol('byteshift-injector');

if (typeof _G[_S] === 'undefined') {
    _G[_S] = new Map();
}

class ServiceHostImpl
{
    /**
     * Registers the given service.
     *
     * Note that a service constructor should not require any arguments.
     *
     * @param {Function} constructor
     */
    public register(constructor: Function)
    {
        _G[_S].set(constructor, new (constructor as any)());
    }

    /**
     * Returns true if a service of the given constructor exists.
     *
     * @param {Function} constructor
     * @returns {boolean}
     */
    public has(constructor: Function)
    {
        return _G[_S].has(constructor);
    }

    /**
     * Returns an instanced service by the given constructor.
     *
     * @param {Function} constructor
     * @returns {T}
     */
    public get<T>(constructor: new (...args: any[]) => T): T
    {
        if (!this.has(constructor)) {
            console.error('The requested service does not exist:', constructor.name);
            throw new Error('Service does not exist.');
        }

        return _G[_S].get(constructor);
    }
}

export const ServiceHost = new ServiceHostImpl();
