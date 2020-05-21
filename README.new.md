[![Build Status](https://travis-ci.org/botflux/dependency-injection-container.svg?branch=master)](https://travis-ci.org/botflux/dependency-injection-container)
[![npm version](https://img.shields.io/npm/v/@botflx%2Fdependency-injection-container.svg)](https://npmjs.org/package/@botflx/dependency-injection-container)
[![Coverage Status](https://coveralls.io/repos/github/botflux/dependency-injection-container/badge.svg?branch=master)](https://coveralls.io/github/botflux/dependency-injection-container?branch=master)
[![Lightweight](https://img.shields.io/bundlephobia/minzip/@botflx/dependency-injection-container)](https://bundlephobia.com/result?p=@botflx/dependency-injection-container)
[![GitHub issues](https://img.shields.io/github/issues/botflux/dependency-injection-container.svg)](https://GitHub.com/botflux/dependency-injection-container/issues/)
[![GitHub license](https://img.shields.io/github/license/botflux/dependency-injection-container.svg)](https://github.com/botflux/dependency-injection-container/blob/master/LICENSE)

## @botflx/dependency-injection-container

A simple lightweight dependency injection container. This package is written in typescript so you can access a full typed API if you are a typescript user.
This package is designed with retro-compatibility in mind.

### Decorators

Reflection and Decorators are [supported](DECORATORS.md). This package provide also an API without decorators.

### Example

As a DI container handles instantiation I will first declare some services that will be instantiated. 

````typescript
class Logger {}

class DatabaseConnection {
    private logger: Logger

    constructor(container: IServiceContainer) {
        this.logger = container.get<Logger>('logger')
    }
}

function getUsers (db: DatabaseConnection) {}
````

`IServiceContainer` implementations provide an fluent API for adders. `IServiceContainer` provides an
API to add class-style and function-style services.

````typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

// Create a service container using factory function
const container: IServiceContainer = createServiceContainer()

// Add class-style/constructor using the add method.
container
    .add('logger', Logger)
    .add('db', DatabaseConnection)

// Add function-style using factory functions
container
    .addFactory('getUsers', (container: IServiceContainer) => getUsers.bind(null, container.get('db')))

// Retrieve services
const getUsers = container.get<Function>('getUsers')
const db = container.get<DatabaseConnection>('db')
const logger = container.get<Logger>('logger')
````

### Services life cycle

Services are instantiated when you call `container.get(serviceName)`.
The instance is deleted when you `container.delete(serviceName)`.
Deletion is performed with the `delete` keyword.

### Recommendation

I recommend when it comes to instantiation to use as much as possible factory functions and interfaces, this way package updates will be less difficult.
Even if I will always prefer retro-compatibility over new features, I will change often more implementation rather than interfaces. 

#### Example

##### Good

```typescript
// ALWAYS use factory functions and interfaces
const container = createServiceContainer()
```

##### BAD

```typescript
// NEVER use implementation
const container = new ServiceContainer()
const containerFactory = new ServiceContainerFactory()
```

