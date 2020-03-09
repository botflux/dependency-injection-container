[![Build Status](https://travis-ci.org/botflux/dependency-injection-container.svg?branch=master)](https://travis-ci.org/botflux/dependency-injection-container)
[![npm version](https://img.shields.io/npm/v/@botflx%2Fdependency-injection-container.svg)](https://npmjs.org/package/@botflx/dependency-injection-container)
[![Coverage Status](https://coveralls.io/repos/github/botflux/dependency-injection-container/badge.svg?branch=master)](https://coveralls.io/github/botflux/dependency-injection-container?branch=master)
[![Lightweight](https://img.shields.io/bundlephobia/minzip/@botflx/dependency-injection-container)](https://bundlephobia.com/result?p=@botflx/dependency-injection-container)
[![GitHub issues](https://img.shields.io/github/issues/botflux/dependency-injection-container.svg)](https://GitHub.com/botflux/dependency-injection-container/issues/)
[![GitHub license](https://img.shields.io/github/license/botflux/dependency-injection-container.svg)](https://github.com/botflux/dependency-injection-container/blob/master/LICENSE)

# dependency-injection-container

A dependency injection container

```shell script
npm install --save @botflx/dependency-injection-container
```

## Javascript example

```javascript
const {createServiceContainer} = require('@botflx/dependency-injection-container')

class Logger {
    constructor(container) {}
}

class DbConnection {
    constructor(container) {}
}

class Controller {
    constructor(container) {}
}

function makeRoute(container) {
    return function(req, res, next) {}
}

// Add services
// Use add() for class-style service
// Use addFactory() for function-style service
// In both case the service container will be passed as first and only argument.
const container = createServiceContainer()
    // Alternatively you can use `new ServiceContainerFactory().create()` 
    .addFactory('config', () => new ConfigurationLoader().load())
    .add('logger', Logger)
    .add('db', DbConnection)

// Alternatively, if you want a service to be resolved without being stored
const controller = container.resolve(Controller)
const route = container.resolveFactory(makeRoute)

// Retrieve a service
// The get method will only cast the service as the generic type.
const logger = container.get('logger')
const db = container.get('db')

// Additionally you can delete a service
container.delete('db')
```

### Factory options

When using `createServiceContainer()` or `new ServiceContainerFactory().create()`,
you can pass an option object.

```javascript

const {createServiceContainer, ServiceContainerFactory} = require('@botflx/dependency-injection-container')

createServiceContainer({ useReflection: false })
// or
new ServiceContainerFactory({ useReflection: false }).create()
```

#### Default options
```typescript
{
    /*
        If true the ServiceContainerFactory will returns a service container
        handling metadata and decorators; otherwise it will returns a plain
        service container.
        It requires `npm i reflect-metadata`.
    */
    useReflection: boolean
}
```

## Typescript example

```typescript
import {IServiceContainer, ServiceContainerFactory} from '@botflx/dependency-injection-container' import {createServiceContainer} from './createServiceContainer'

class Logger {
    constructor(container: IServiceContainer) {}
}

class DbConnection {
    constructor(container: IServiceContainer) {}
}

class Controller {
    constructor(container: IServiceContainer) {}
}

function makeRoute (container: IServiceContainer) {
    return function(req: Request, res: Response, next, next: NextFunction) {}
}

// Add services
// Use add() for class-style service
// Use addFactory() for function-style service
// In both case the service container will be passed as first and only argument.
const container: IServiceContainer = createServiceContainer()
    // Alternatively you can use `new ServiceContainerFactory().create()`
    .addFactory('config', () => new ConfigurationLoader().load())
    .add('logger', Logger)
    .add('db', DbConnection)

// Alternatively, if you want a service to be resolved without being stored
const controller: Controller = container.resolve(Controller)
const route: Function = container.resolveFactory(makeRoute)

// Retrieve a service
// The get method will only cast the service as the generic type.
const logger: ILogger = container.get<ILogger>('logger')
const connection: DbConnection = container.get<DbConnection>('db')

// Additionally you can delete a service
container.delete('db') 
```


### Factory options

When using `createServiceContainer()` or `new ServiceContainerFactory().create()`,
you can pass an option object.

```typescript
import {createServiceContainer, ServiceContainerFactory} from '@botflx/dependency-injection-container'

createServiceContainer({ useReflection: false })
// or
new ServiceContainerFactory({ useReflection: false }).create()
```

#### Default options
```typescript
{
    /*
        If true the ServiceContainerFactory will returns a service container
        handling metadata and decorators; otherwise it will returns a plain
        service container.
        It requires `npm i reflect-metadata`.
    */
    useReflection: boolean
}
```


## Decorators

You can learn more about decorators in [Usage page](USAGE.md).

## Tests

```shell script
git clone https://github.com/botflux/dependency-injection-container.git
cd dependency-injection-container
npm install
npm test # or
npm run test:watch
```

## Issues

If you have issues with the package or request, go [here](https://github.com/botflux/dependency-injection-container/issues).
