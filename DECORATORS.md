# Decorators / Reflection support

As mentions in [README](README.new.md#Decorators) this package
supports decorators and reflection.

This package use decorators in a passive way meaning
that the only role of a decorator in to attach metadata.
The active work such as registering or instantiating is done by
service loaders or container itself.

## Example

To illustrate the usage of decorators, we will use
the same example as in [README](README.new.md#Example)

````typescript
import { Inject, Service } from '@botflx/dependency-injection-container'

@Service('logger')
class Logger {}

@Service('db')
class DatabaseConnection {
    private logger: Logger

    // You don't need to call container.get
    // You can directly use @Inject 
    constructor(
        @Inject('logger') logger: Logger
    ) {
        this.logger = logger
    }
}

function getUsers (db: DatabaseConnection) {}
````

`IServiceContainer` implementations provide an fluent API for adders. `IServiceContainer` provides an
API to add class-style and function-style services.

````typescript
import {createServiceContainer, createReflectServiceLoader} from '@botflx/dependency-injection-container'

// Create a service container using factory function
const container: IServiceContainer = createServiceContainer({
    useReflection: true,
    // In order to load services you must use IServiceLoader
    // that supports Reflection.
    // Under the hood this service loader will read the decorators's metadata
    // and call the `container.add()` method.
    serviceLoader: createReflectServiceLoader([ Logger, DatabaseConnection ], [])
})

// Add function-style using factory functions
// Even with decorators supports factory functions still works the same as with
// non-reflection container. This way you still will be able to add function or
// classes you can't decorate.
container
    .addFactory('getUsers', (container: IServiceContainer) => getUsers.bind(null, container.get('db')))

// Retrieve services
const getUsers = container.get<Function>('getUsers')
const db = container.get<DatabaseConnection>('db')
const logger = container.get<Logger>('logger')
````
