/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import {IDisposable, Service, ServiceContainer} from '../src';

describe('Basic service registration', () => {

    it('Expects a simple class to be registered as a service', async () => {
        @Service()
        class BasicService
        {
            public num: number = 42;
        }

        await ServiceContainer.compile();

        expect((await ServiceContainer.get(BasicService)).num).toBe(42);
        ServiceContainer.reset();
    });

    it('Expects a registered class to be instantiated once', async () => {
        @Service()
        class BasicService
        {
            public num: number = 42;
        }

        await ServiceContainer.compile();

        expect((await ServiceContainer.get(BasicService)).num).toBe(42);

        (await ServiceContainer.get(BasicService)).num = 8;

        expect((await ServiceContainer.get(BasicService)).num).toBe(8);
        ServiceContainer.reset();
    });

    it('Expects the global context to be the default context', async () => {
        @Service()
        class BasicService
        {
            public num: number = 42;
        }

        await ServiceContainer.compile();
        await ServiceContainer.compile(); // Compiling twice shouldn't do anything.

        expect((await ServiceContainer.get(BasicService))).toStrictEqual(await ServiceContainer.of().get(BasicService));
        ServiceContainer.reset();
    });

    it('Expects fetching a service from a non-compiled context to automatically compile', async () => {
        @Service()
        class BasicService
        {
            public num: number = 42;
        }

        const instance = await ServiceContainer.of('not-compiled').get(BasicService);

        expect(instance).toBeInstanceOf(BasicService);
        ServiceContainer.reset();
    });

    it('Expects a service to be only registered once.', () => {
        expect(() => {
            @Service()
            @Service()
            class BasicService
            {
                public num: number = 42;
            }

        }).toThrow();
    });

    it('Expects to throw if an unknown service is fetched.', async () => {
        await expect(() => ServiceContainer.get(Date)).rejects.toThrow();
    })

    it('Should dispose of a context properly when needed.', async () => {

        let isDisposed: boolean = false;

        @Service({isolated: true, autoload: true})
        class Svc implements IDisposable
        {
            dispose() {
                isDisposed = true;
            }
        }

        const ctx = await ServiceContainer.compile();
        expect(() => ctx.dispose()).toThrow();

        const ctx2 = await ServiceContainer.of('ctx2').compile();
        ctx2.dispose();

        expect(isDisposed).toBeTruthy();
        await expect(() => ctx2.get(Svc)).rejects.toThrow();
    });

    it('Should run a factory function when specified.', async () => {
        @Service({
            isolated: true,
            factory:  (ctor, options) => {
                return new ctor(42 + (options.contextId ?? 0));
            }
        })
        class Svc
        {
            constructor(public num: number)
            {
            }
        }

        const inst = await ServiceContainer.get(Svc);
        expect(inst.num).toBe(42);

        const inst2 = await ServiceContainer.of(10).get(Svc);
        expect(inst2.num).toBe(52);

        ServiceContainer.reset();
    });
});
