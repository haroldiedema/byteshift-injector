![](./docs/injector.png)
========================

Byteshift Injector is a tiny Dependency Injection library designed to
be used with TypeScript. It utilizes the reflect-metadata package to
automatically inject singleton instances of 'services' into a property
of any class upon instantiation.

Install through NPM:
```sh
$ npm i @byteshift/injector
```
or through Yarn:
```sh
$ yarn add @byteshift/injector
```

Define a service using the `@Service` decorator:
```typescript
import {Service} from '@byteshift/injector';

@Service
export class DatabaseService
{
    public query(sql: string): any;
}
``` 

Inject the service using the `@Inject` decorator on a property.

```typescript
export class RegistrationForm
{
    @Inject private readonly db: DatabaseService;

    constructor()
    {
        // Access it as you would expect it to work.
        this.db.query('SELECT * FROM ...');
    }
} 
```
