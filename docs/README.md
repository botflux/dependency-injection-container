[@botflx/dependency-injection-container - v1.0.1](README.md) › [Globals](globals.md)

# @botflx/dependency-injection-container - v1.0.1

# dependency-injection-container

A dependency injection container

```typescript
import {IServiceContainer, ServiceContainerFactory} from 'dependency-injection-container'

class Logger {
    constructor(container: IServiceContainer) {}
}

class DbConnection {
    constructor(container: IServiceContainer) {}
}

// Add services
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
git clone https://gitlab.logitud.fr/v-mendele/dependency-injection-container.git
cd dependency-injection-container
npm install
npm test # or
npm run test:watch
```

## Dependencies

- @types/jest 24.x
- jest 24.x
- ts-jest 24.x
- typescript 3.7
