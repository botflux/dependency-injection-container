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

import {ServiceContainer, createServiceContainerHelpers} from '../'

const container = new ServiceContainer()
const { Service, InjectCons, InjectProp } = createServiceContainerHelpers(container)

@Service('logger')
class Logger {}

@Service('db')
class Db {}

@Service('userDao')
class UserDao {
    // You can inject dependencies using InjectProp.
    // InjectProp can only be used for class properties.
    // This works even if the class isn't a service itself.
    @InjectProp(container, 'logger')
    private logger?: Logger

    private db: Db    

    // You can inject dependencies using InjectCons.
    // InjectCons can only be used for parameters.
    // This works only if the class is declared as a service.
    constructor(@InjectCons('db') db: Db) {
        this.db = db
    }
}
```
