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

## Typescript example

```typescript
import {IServiceContainer, ServiceContainerFactory} from '@botflx/dependency-injection-container'

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
const container: IServiceContainer = new ServiceContainerFactory()
    .create()
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
