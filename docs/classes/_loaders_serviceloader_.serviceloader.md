[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["loaders/ServiceLoader"](../modules/_loaders_serviceloader_.md) › [ServiceLoader](_loaders_serviceloader_.serviceloader.md)

# Class: ServiceLoader

Load a collection of service in a service container implementation.

```typescript
import 'reflect-metadata'
import {createServiceContainer, ServiceContainer, Constructor, ImportService} from '@botflx/dependency-injection-container'

// List of service constructors
const serviceConstructors: ImportService<Constructor>[] = [...]
const serviceFactories: ImportService<IServiceFactoryFunction>[] = [...]

// Creates a service container
// In fact you can use a ReflectServiceLoader with a non-reflection service container.
const container = createServiceContainer()
const plainServiceLoader = new ServiceLoader(serviceConstructors, serviceFactories)

// Load services in service loader
plainServiceLoader.load(container)
```

## Hierarchy

* **ServiceLoader**

## Implements

* [IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)

## Index

### Constructors

* [constructor](_loaders_serviceloader_.serviceloader.md#constructor)

### Properties

* [_serviceConstructors](_loaders_serviceloader_.serviceloader.md#private-_serviceconstructors)
* [_serviceFactories](_loaders_serviceloader_.serviceloader.md#private-_servicefactories)

### Methods

* [load](_loaders_serviceloader_.serviceloader.md#load)

## Constructors

###  constructor

\+ **new ServiceLoader**(`serviceConstructors`: [ImportService](../modules/_types_.md#importservice)‹[Constructor](../modules/_types_.md#constructor)›[], `serviceFactories`: [ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]): *[ServiceLoader](_loaders_serviceloader_.serviceloader.md)*

*Defined in [src/loaders/ServiceLoader.ts:28](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/loaders/ServiceLoader.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceConstructors` | [ImportService](../modules/_types_.md#importservice)‹[Constructor](../modules/_types_.md#constructor)›[] |
`serviceFactories` | [ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[] |

**Returns:** *[ServiceLoader](_loaders_serviceloader_.serviceloader.md)*

## Properties

### `Private` _serviceConstructors

• **_serviceConstructors**: *[ImportService](../modules/_types_.md#importservice)‹[Constructor](../modules/_types_.md#constructor)›[]*

*Defined in [src/loaders/ServiceLoader.ts:27](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/loaders/ServiceLoader.ts#L27)*

___

### `Private` _serviceFactories

• **_serviceFactories**: *[ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]*

*Defined in [src/loaders/ServiceLoader.ts:28](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/loaders/ServiceLoader.ts#L28)*

## Methods

###  load

▸ **load**(`container`: [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)): *void*

*Implementation of [IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*

*Defined in [src/loaders/ServiceLoader.ts:35](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/loaders/ServiceLoader.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md) |

**Returns:** *void*
