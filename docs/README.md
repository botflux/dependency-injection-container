[@botflx/dependency-injection-container - v1.4.2](README.md) › [Globals](globals.md)

# @botflx/dependency-injection-container - v1.4.2

[![Build Status](https://travis-ci.org/botflux/dependency-injection-container.svg?branch=master)](https://travis-ci.org/botflux/dependency-injection-container)
[![npm version](https://img.shields.io/npm/v/@botflx%2Fdependency-injection-container.svg)](https://npmjs.org/package/@botflx/dependency-injection-container)
[![Coverage Status](https://coveralls.io/repos/github/botflux/dependency-injection-container/badge.svg?branch=master)](https://coveralls.io/github/botflux/dependency-injection-container?branch=master)
[![Lightweight](https://img.shields.io/bundlephobia/minzip/@botflx/dependency-injection-container)](https://bundlephobia.com/result?p=@botflx/dependency-injection-container)
[![GitHub issues](https://img.shields.io/github/issues/botflux/dependency-injection-container.svg)](https://GitHub.com/botflux/dependency-injection-container/issues/)
[![GitHub license](https://img.shields.io/github/license/botflux/dependency-injection-container.svg)](https://github.com/botflux/dependency-injection-container/blob/master/LICENSE)

## Installation

```shell script
npm i --save @botflx/dependency-injection-container
# or using yarn
yarn add @botflx/dependency-injection-container
```

## API

### Container creation

- [`createServiceContainer(options: IServiceContainerFactoryOptions): IServiceContainer`](#Container creation)

### Container usage

- `IServiceContainer.get<TService>(serviceName: string): TService`
- `IServiceContainer.add(serviceName: string, constructor: Function): IServiceContainer`
- `IServiceContainer.addService(serviceName: string, factory: Function): IServiceContainer`
- `IServiceContainer.resolve<TService>(constructor: Function): TService`
- `IServiceContainer.resolveFacory<TService>(factory: Function): TService`
- `IServiceContainer.delete(serviceName: string): IServiceContainer`

### Decorators

- `@Inject(string)`
- `@Service(string)`

## Usage

### Container with decorators

```typescript
import 'reflect-metadata'
import {createServiceContainer, Inject, Service, createReflectServiceLoader} from '@botflx/dependency-injection-container'

// Add metadata to this class, the service loader will
// be able to load those metadata and it will populate 
// the service container.
@Service('Logger')
class Logger {}

@Service('UserDao')
class UserDao {
    // You can inject services using the @Inject decorator.
    constructor(@Inject('Logger') logger: Logger) {}
}

// The service loader role is to collect services that use @Service decorators
const serviceLoader = createReflectServiceLoader([Logger, UserDao], [])
const container = createServiceContainer({ useReflection: true, serviceLoader: serviceLoader })

const logger = container.get<Logger>('Logger')
const userDao = container.get<UserDao>('UserDao')
```

## More examples

### Plain container examples

```typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

// It creates a plain container without decorators supports.
// You can plain container when you don't want to import 'npm i reflect-metadata'
const plainContainer = createServiceContainer({ useReflection: false })

import 'reflect-metadata'
// It creates a container that supports decorators.
// You must import the reflect-metadata package in order to use this container type.
const container = createServiceContainer({ useReflection: true })

// By default this factory creates plain container
const anotherPlainContainer = createServiceContainer()
```

### Plain container usage example

```typescript
import {createServiceContainer, IServiceContainer} from '@botflx/dependency-injection-container'

const plainContainer = createServiceContainer({ useReflection: false })

class Logger {}
class UserDao {
    // When you use plain containers services will
    // receive the container as first parameter.
    constructor(container: IServiceContainer) {
        container.get<Logger>('Logger')
    }
}

// Add services using the `IServiceContainer.add()`
plainContainer
    .add('Logger', Logger)
    .add('UserDao', UserDao)

// Get user dao using `IServiceContainer.get()`
const userDao = plainContainer.get<UserDao>('UserDao')

function createUserFactory (logger: Logger) {
    return function (userName: string, password: string) { ... }
}

// Sometimes you can't use the class constructor, so you can use
// `IServiceContainer.addFactory()` as a fallback.
plainContainer
    .addFactory('createUser', container => createUserFactory(container.get('Logger')))
```
