/* Byteshift Injector                                                              _         _             __   _ _____
 *    A tiny Dependency Injection library                                         | |__ _  _| |_ ___  ___ / /  (_) _/ /_
 *                                                                                | '_ \ || |  _/ -_|(_-</ _ \/ / _/ __/
 * (C)2022, Harold Iedema <harold@iedema.me>                                      |_.__/\_, |\__\___/___/_//_/_/_/ \__/
 * See LICENSE for licensing information                                                |__/           I N J E C T O R
 */
'use strict';

import {IAsyncService, Service, ServiceContainer} from '../src';

describe('Isolated contexts', () => {

    it('Expects isolated services to live in their own scope', async () => {
        @Service({autoload: true})
        class SharedService
        {
            public sharedNum: number = 10;

            public add(a: number, b: number): number
            {
                return a + b + this.sharedNum;
            }
        }

        @Service({isolated: true})
        class IsolatedService
        {
            public result: number = 0;

            constructor(public readonly shared: SharedService)
            {
            }

            public add(a: number, b: number)
            {
                this.result = this.shared.add(a, b);
            }
        }

        await ServiceContainer.compile();

        const ctx1 = await ServiceContainer.of('ctx1').compile();
        const ctx2 = await ServiceContainer.of('ctx2').compile();

        (await ctx1.get(SharedService)).sharedNum = 10;

        (await ctx1.get(IsolatedService)).add(1, 1);
        (await ctx2.get(IsolatedService)).add(2, 2);

        expect((await ctx1.get(IsolatedService)).result).toBe(12);
        expect((await ctx2.get(IsolatedService)).result).toBe(14);

        (await ctx1.get(SharedService)).sharedNum = 0;

        (await ctx1.get(IsolatedService)).add(1, 1);
        (await ctx2.get(IsolatedService)).add(2, 2);

        expect((await ctx1.get(IsolatedService)).result).toBe(2);
        expect((await ctx2.get(IsolatedService)).result).toBe(4);

        expect((await ctx1.get(IsolatedService)).shared).toStrictEqual(await ServiceContainer.get(SharedService));
        expect((await ctx2.get(IsolatedService)).shared).toStrictEqual(await ServiceContainer.get(SharedService));

        ServiceContainer.reset();
    });

    it('Expect an async initializer to be invoked with the context id', async () => {
        @Service({isolated: true, autoload: true})
        class AsyncOne implements IAsyncService
        {
            public detectedCtx: any;

            public async initialize(contextId: any): Promise<void>
            {
                this.detectedCtx = contextId;
            }
        }

        await ServiceContainer.compile();
        expect((await ServiceContainer.get(AsyncOne)).detectedCtx).toBeNull();

        await ServiceContainer.of('Some Context').compile();
        expect((await ServiceContainer.of('Some Context').get(AsyncOne)).detectedCtx).toStrictEqual('Some Context');
    });

    it('Expects an error if a non-isolated service depends on an isolated one', async () => {
        @Service({isolated: true})
        class Isolated
        {}

        @Service({autoload: true})
        class Shared
        {
            constructor(isolated: Isolated)
            {
            }
        }

        await ServiceContainer.compile();
        await expect(() => ServiceContainer.get(Shared)).rejects.toThrow();
    });
});
