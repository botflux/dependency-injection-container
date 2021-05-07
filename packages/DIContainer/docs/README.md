[@botflx/dependency-injection-container - v2.1.0](README.md) › [Globals](globals.md)

# @botflx/dependency-injection-container - v2.1.0

# DIContainer

## Warning

This package version is published under the beta tag. You can find the 1.x version implementation under packages/OldContainer.
The beta version comes with a lot of breaking changes, and an adapter will be developed in order to make v1 compatible beta.
Even the components exposed by this version are subject to change.

## Installation

```shell
npm i @botflx/dependency-injection-container@beta
yarn add @botflx/dependency-injection-container@beta
```

## Usage

```typescript
import { createContainerBuilder, LifeCycle } from '@botflx/dependency-injection-container'

class ServiceA {}
class ServiceB {}

const createSomething = (provider) => Promise.resolve(provider.get('ServiceA'))

const builder = createContainerBuilder()
    .addConstructor('ServiceA', ServiceA, LifeCycle.Singleton)
    .addFactory('ServiceB', provider => new ServiceB(provider.get('ServiceA')), LifeCycle.Singleton)
    .addAsyncFactory('ServiceC', provider => createSomething(provider), LifeCycle.Singleton)

const container = builder.build()

const serviceC = await container.getAsync('ServiceC')
const serviceA = container.get<ServiceA>('ServiceA')
const serviceB = container.get<ServiceB>('ServiceB')
```

### Using decorators

```typescript
import 'reflect-metadata'
import { createContainerBuilder, LifeCycle, Inject, Service, reflectServiceLoader } from '@botflx/dependency-injection-container'

const symbols = {
  serviceA: Symbol("service A"),
  serviceB: Symbol("service B")
}

@Service(symbols.serviceA, LifeCycle.Singleton)
class ServiceA {
  constructor(@Inject(symbols.ServiceB) serviceB: ServiceB) {}
}

class ServiceB {}

const container = createContainerBuilder({ loaders: reflectServiceLoader([ ServiceA ]) })
  .addConstructor(symbols.ServiceB, ServiceB)
  .build()
  
const serviceA = container.get<ServiceA>(symbols.serviceA)
```
