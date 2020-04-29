[![Build Status](https://travis-ci.org/botflux/dependency-injection-container.svg?branch=master)](https://travis-ci.org/botflux/dependency-injection-container)
[![npm version](https://img.shields.io/npm/v/@botflx%2Fdependency-injection-container.svg)](https://npmjs.org/package/@botflx/dependency-injection-container)
[![Coverage Status](https://coveralls.io/repos/github/botflux/dependency-injection-container/badge.svg?branch=master)](https://coveralls.io/github/botflux/dependency-injection-container?branch=master)
[![Lightweight](https://img.shields.io/bundlephobia/minzip/@botflx/dependency-injection-container)](https://bundlephobia.com/result?p=@botflx/dependency-injection-container)
[![GitHub issues](https://img.shields.io/github/issues/botflux/dependency-injection-container.svg)](https://GitHub.com/botflux/dependency-injection-container/issues/)
[![GitHub license](https://img.shields.io/github/license/botflux/dependency-injection-container.svg)](https://github.com/botflux/dependency-injection-container/blob/master/LICENSE)

# dependency-injection-container

A dependency injection container

```shell script
npm install --save @botflx/dependency-injection-container
```

# Usage

Looking for javascript examples ? You can find some [here](/JAVASCRIPT.md) or in [basic example js](/examples/basic-example-js).

Here's an example on how to create and populate a service container.
You can create a service container by using `createServiceContainer`.
If the service is a class you can pass it with `container.add()` and if you
have a function-style service you can add it with `container.addFactory()`.
You can get a service instance by calling `container.get()`.

Every service / factory receive the container as first parameter.  

```typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

class OptionProvider {
    constructor(container: IServiceContainer) {}
}

// Create a new service container
const container = createServiceContainer()

// Add a service constructor
container.add('provider.options', OptionProvider)

// Add a service factory function
container.addFactory('logger', (container: IServiceContainer) => (message: string) => console.log(message))

// Get a service
const optionProvider = container.get<OptionProvider>('provider.options')
const logger = container.get<(message: string) => void>('logger')
```

## Examples

You can find examples for typescript and javascript [here](/examples).

## Some more functions

An `IServiceContainer` gives some more methods. You can instantiate a constructor or factory function be using 
`container.resolve()` and `container.resolveFactory()`.
You can also delete a service by calling `container.delete()` 

```typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

const container = createServiceContainer()

// Instantiate the following constructor without adding it to the container.
const optionProvider = container.resolve<OptionResolver>(OptionProvider)
const logger = container.resolveFactory<Function>((container: IServiceContainer) => (message) => console.log(message))

container.add('provider.options', OptionProvider)
container.delete('provider.options')

// Throw a ServiceNotFoundError
container.get('provider.options')

```

## Fluent API

`IServiceContainer` implementation gives fluent adders which means that adders will return the container instance.

```typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

const container = createServiceContainer()
    .add('service1', ...)
    .add('service2', ...)
    .addFactory('service3' ...)
    .add('service4', ...)
```

### Factory options

When using `createServiceContainer()` or `new ServiceContainerFactory().create()`,
you can pass an option object.

```typescript
import {createServiceContainer} from '@botflx/dependency-injection-container'

createServiceContainer({ useReflection: false, allowServiceOverride: false })
```

#### Default options
```typescript
{
    /*
        If true the ServiceContainerFactory will returns a service container
        handling metadata and decorators; otherwise it will returns a plain
        service container.
        Go to USAGE.md to learn more.
        It requires `npm i reflect-metadata`.
    */
    useReflection: boolean = false

    /*
        If true an IServiceContainer will allow you to call `container.add()` 
        or `container.addFactory()` multiple times with the same service name. 
    */
    allowServiceOverride: boolean = false
}
```

## Decorators

You can learn more about decorators in [Usage page](USAGE.md).

## Tests

```shell script
git clone https://github.com/botflux/dependency-injection-container.git
cd dependency-injection-container
npm install
npm test # or
npm run test:watch
```

## Issues

If you have issues with the package or request, go [here](https://github.com/botflux/dependency-injection-container/issues).
