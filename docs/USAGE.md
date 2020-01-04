# Basic usage

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

# Using decorators

You can also use decorators to declare a class as a service and to populate a property.
```typescript
import {InjectService, DeclareService, ServiceContainer} from './' 

const container = new ServiceContainer()

@DeclareService(container, 'logger')
class Logger {}

@DeclareService(container, 'userDao')
class UserDao {
    @InjectService(container, 'logger')
    private logger?: Logger
}
```
