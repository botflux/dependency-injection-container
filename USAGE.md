# Basic usage

```typescript
import {ServiceContainerFactory, IServiceContainer} from '@botflx/dependency-injection-container'

class Logger {}
class DbConnection {
    private logger: Logger

    constructor(container: IServiceContainer) {
        this.logger = container.get<Logger>('logger')
    }
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
```

# Using decorators

Use decorator to simplify constructors.
If you want to use `@Inject`, you must `npm i reflect-metadata`
and add `import 'reflect-metadata'` before every others imports.

```typescript
import 'reflect-metadata'
import {ServiceContainerFactory, Inject} from '@botflx/dependency-injection-container'

class Logger {}
class DbConnection {
    private logger: Logger

    constructor(@Inject('logger') logger: Logger) {
        this.logger = logger
    }
}

class Controller {
    constructor(@Inject('db') private db: DbConnection) {}
}

const container = new ServiceContainerFactory({ useReflection: true })
    .create()
    .addFactory('config', () => new ConfigurationLoader().load())
    .add('logger', Logger)
    .add('db', DbConnection)

const controller = container.resolve(Controller)

const db: DbConnection = container.get<DbConnection>('db')
```
