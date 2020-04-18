
## Typescript example

```typescript
import {IServiceContainer, ServiceContainerFactory} from '@botflx/dependency-injection-container' 
import {createServiceContainer} from './createServiceContainer'

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
