## Javascript example

```javascript
const {createServiceContainer} = require('@botflx/dependency-injection-container')

class Logger {
    constructor(container) {}
}

class DbConnection {
    constructor(container) {}
}

class Controller {
    constructor(container) {}
}

function makeRoute(container) {
    return function(req, res, next) {}
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

// Alternatively, if you want a service to be resolved without being stored
const controller = container.resolve(Controller)
const route = container.resolveFactory(makeRoute)

// Retrieve a service
// The get method will only cast the service as the generic type.
const logger = container.get('logger')
const db = container.get('db')

// Additionally you can delete a service
container.delete('db')
```
