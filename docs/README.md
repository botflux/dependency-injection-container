[@botflx/dependency-injection-container - v1.2.5](README.md) › [Globals](globals.md)

# @botflx/dependency-injection-container - v1.2.5

# dependency-injection-container

A dependency injection container

```shell script
npm install --save-dev @botflx/dependency-injection-container
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

// Add services
// Use add() for class-style service
// Use addFactory() for function-style service
// In both case the service container will be passed as first and only argument.
const container = createServiceContainer()
    // Alternatively you can use `new ServiceContainerFactory().create()` 
    .addFactory('config', () => new ConfigurationLoader().load())
    .add('logger', Logger)
    .add('db', DbConnection)

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

// Add services
// Use add() for class-style service
// Use addFactory() for function-style service
// In both case the service container will be passed as first and only argument.
const container: IServiceContainer = createServiceContainer()
    // Alternatively you can use `new ServiceContainerFactory().create()`
    .addFactory('config', () => new ConfigurationLoader().load())
    .add('logger', Logger)
    .add('db', DbConnection)

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
