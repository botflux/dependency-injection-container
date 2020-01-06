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
import {InjectServiceProperty, DeclareService, ServiceContainer} from './' import {InjectServiceConstructor} from './InjectServiceConstructor' 

const container = new ServiceContainer()

@DeclareService(container, 'logger')
class Logger {}

@DeclareService(container, 'userDao')
class UserDao {
    @InjectServiceProperty(container, 'logger')
    private logger?: Logger
}

// or services can be resolved in constructor,
// with the second method you must declare the class as a service
// because parameter will be resolved in factory made by the container.

@DeclareService(container, 'productDao')
class ProductDao {
    private readonly userDao: UserDao

    constructor(
        @InjectServiceConstructor(container, 'userDao') userDao: UserDao
    ) {
        this.userDao = userDao
    }
}
```
