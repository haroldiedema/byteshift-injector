/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import {Service, ServiceContainer} from '../src';

describe('Basic dependency injection', () => {

    it('Expects dependencies to be resolved in order', async () => {
        const loadOrder: number[] = [];

        @Service() class Svc1 { constructor() { loadOrder.push(1); } }
        @Service() class Svc2 { constructor(s1: Svc1) { loadOrder.push(2); } }
        @Service() class Svc3 { constructor(s1: Svc1, s2: Svc2) { loadOrder.push(3); } }
        @Service() class Svc4 { constructor(s3: Svc3) { loadOrder.push(4); } }

        await ServiceContainer.compile();

        expect(loadOrder).toStrictEqual([]);
        expect((await ServiceContainer.get(Svc4))).toBeInstanceOf(Svc4);
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);
        ServiceContainer.reset();
    });

    it('Expects dependencies to be resolved in order when auto-loading', async () => {
        const loadOrder: number[] = [];

        @Service() class Svc1 { constructor() { loadOrder.push(1); } }
        @Service() class Svc2 { constructor(s1: Svc1) { loadOrder.push(2); } }
        @Service() class Svc3 { constructor(s1: Svc1, s2: Svc2) { loadOrder.push(3); } }
        @Service({autoload: true}) class Svc4 { constructor(s3: Svc3) { loadOrder.push(4); } }

        // Due to an auto-loading service, service instantiation now happens in
        // the compilation phase...
        expect(loadOrder).toStrictEqual([]);
        await ServiceContainer.compile();
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);

        // Load-order should still be the same after fetching a service.
        expect((await ServiceContainer.get(Svc4))).toBeInstanceOf(Svc4);
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);

        ServiceContainer.reset();
    });

    it('Expects conditional auto-loading to work properly.', async () => {
        @Service({isolated: true, autoload: (ctx) => ctx === 'ctx1'})
        class Svc1 { constructor() { loadOrder.push(1); } }

        @Service({isolated: true, autoload: true})
        class Svc2 { constructor() { loadOrder.push(2); } }

        let loadOrder: number[] = [];
        await ServiceContainer.compile();
        expect(loadOrder).toStrictEqual([2]);

        loadOrder = [];
        await ServiceContainer.of('ctx1').compile();
        expect(loadOrder).toStrictEqual([1, 2]);

        ServiceContainer.reset();
    });


    it('Expects existing dependencies to be resolved in order when already loaded.', async () => {
        const loadOrder: number[] = [];

        @Service() class Svc1 { constructor() { loadOrder.push(1); } }
        @Service() class Svc2 { constructor(s1: Svc1) { loadOrder.push(2); } }
        @Service() class Svc3 { constructor(s1: Svc1, s2: Svc2) { loadOrder.push(3); } }
        @Service({autoload: true}) class Svc4 { constructor(s1: Svc1, s2: Svc2, s3: Svc3) { loadOrder.push(4); } }

        await ServiceContainer.compile();
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);

        expect((await ServiceContainer.get(Svc4))).toBeInstanceOf(Svc4);
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);

        // Compile in another context. This should not affect the loadOrder
        // array, since there are no isolated services.
        await ServiceContainer.of('ctx2').compile();
        expect(loadOrder).toStrictEqual([1, 2, 3, 4]);

        ServiceContainer.reset();
    });

    it('Should throw an error if a undefined-service is being injected.', async () => {
        @Service()
        class Svc1
        {
            constructor(unknown: Date)
            {
            }
        }

        await ServiceContainer.compile();
        await expect(() => ServiceContainer.get(Svc1)).rejects.toThrow();
    });
});
