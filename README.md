# dependency-injection-container

A dependency injection container

```typescript
import {ServiceContainer, IServiceContainer} from './'

// Add services
const container: IServiceContainer = new ServiceContainer()
    .add('config', () => new ConfigurationLoader().load())
    .add('logger', (serviceContainer: IServiceContainer) => new Logger(serviceContainer))
    .add('db', (serviceContainer: IServiceContainer) => new DbConnection(serviceContainer))

// Retrieve a service
// The get method will only cast the service as the generic type.
const logger: ILogger = container.get<ILogger>('logger')
const connection: DbConnection = container.get<DbConnection>('db')
```

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
