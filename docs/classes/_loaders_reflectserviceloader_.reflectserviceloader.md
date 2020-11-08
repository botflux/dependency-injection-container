[@botflx/dependency-injection-container - v1.4.2](../README.md) › [Globals](../globals.md) › ["loaders/ReflectServiceLoader"](../modules/_loaders_reflectserviceloader_.md) › [ReflectServiceLoader](_loaders_reflectserviceloader_.reflectserviceloader.md)

# Class: ReflectServiceLoader

Load a collection of service in a service container implementation.

```typescript
import 'reflect-metadata'
import {createServiceContainer, ReflectServiceLoader, Constructor, ImportService} from '@botflx/dependency-injection-container'

// List of service constructors
const serviceConstructors: Constructor[] = [...]
const serviceFactories: ImportService<IServiceFactoryFunction>[] = [...]

// Creates a service container
// In fact you can use a ReflectServiceLoader with a non-reflection service container.
const container = createServiceContainer()
const reflectServiceLoader = new ReflectServiceLoader(serviceConstructors, serviceFactories)

// Load services in service loader
reflectServiceLoader.load(container)
```

## Hierarchy

* **ReflectServiceLoader**

## Implements

* [IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)

## Index

### Constructors

* [constructor](_loaders_reflectserviceloader_.reflectserviceloader.md#constructor)

### Properties

* [_serviceConstructors](_loaders_reflectserviceloader_.reflectserviceloader.md#private-_serviceconstructors)
* [_serviceFactories](_loaders_reflectserviceloader_.reflectserviceloader.md#private-_servicefactories)

### Methods

* [load](_loaders_reflectserviceloader_.reflectserviceloader.md#load)
* [getServiceName](_loaders_reflectserviceloader_.reflectserviceloader.md#static-private-getservicename)

## Constructors

###  constructor

\+ **new ReflectServiceLoader**(`serviceConstructor`: [Constructor](../modules/_types_.md#constructor)[], `serviceFactories`: [ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]): *[ReflectServiceLoader](_loaders_reflectserviceloader_.reflectserviceloader.md)*

*Defined in [src/loaders/ReflectServiceLoader.ts:38](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/loaders/ReflectServiceLoader.ts#L38)*

Creates a new instance of *ReflectServiceLoader* by passing a collection of constructor and a collection of factories.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serviceConstructor` | [Constructor](../modules/_types_.md#constructor)[] | Collection of service constructor |
`serviceFactories` | [ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[] | Collection of service factories  |

**Returns:** *[ReflectServiceLoader](_loaders_reflectserviceloader_.reflectserviceloader.md)*

## Properties

### `Private` _serviceConstructors

• **_serviceConstructors**: *[Constructor](../modules/_types_.md#constructor)[]*

*Defined in [src/loaders/ReflectServiceLoader.ts:33](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/loaders/ReflectServiceLoader.ts#L33)*

Service constructors to load.

___

### `Private` _serviceFactories

• **_serviceFactories**: *[ImportService](../modules/_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]*

*Defined in [src/loaders/ReflectServiceLoader.ts:38](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/loaders/ReflectServiceLoader.ts#L38)*

Service factories to load.

## Methods

###  load

▸ **load**(`container`: [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)): *void*

*Implementation of [IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*

*Defined in [src/loaders/ReflectServiceLoader.ts:51](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/loaders/ReflectServiceLoader.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md) |

**Returns:** *void*

___

### `Static` `Private` getServiceName

▸ **getServiceName**(`constructor`: [Constructor](../modules/_types_.md#constructor)): *string*

*Defined in [src/loaders/ReflectServiceLoader.ts:67](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/loaders/ReflectServiceLoader.ts#L67)*

Returns service name described by `@Service` decorator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`constructor` | [Constructor](../modules/_types_.md#constructor) |   |

**Returns:** *string*
