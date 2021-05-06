[@botflx/dependency-injection-container - v2.0.1](../README.md) › [Globals](../globals.md) › ["Implementation/Container"](../modules/_implementation_container_.md) › [ContainerBuilder](_implementation_container_.containerbuilder.md)

# Class: ContainerBuilder

## Hierarchy

* **ContainerBuilder**

## Implements

* [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)

## Index

### Constructors

* [constructor](_implementation_container_.containerbuilder.md#constructor)

### Properties

* [asyncFactories](_implementation_container_.containerbuilder.md#private-asyncfactories)
* [syncFactories](_implementation_container_.containerbuilder.md#private-syncfactories)

### Methods

* [addAsyncFactory](_implementation_container_.containerbuilder.md#addasyncfactory)
* [addConstructor](_implementation_container_.containerbuilder.md#addconstructor)
* [addFactory](_implementation_container_.containerbuilder.md#addfactory)
* [build](_implementation_container_.containerbuilder.md#build)
* [isAlreadyRegistered](_implementation_container_.containerbuilder.md#isalreadyregistered)

## Constructors

###  constructor

\+ **new ContainerBuilder**(`options`: [CreateContainerBuilderOptions](../modules/_implementation_container_.md#createcontainerbuilderoptions)): *[ContainerBuilder](_implementation_container_.containerbuilder.md)*

*Defined in [src/Implementation/Container.ts:85](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateContainerBuilderOptions](../modules/_implementation_container_.md#createcontainerbuilderoptions) |

**Returns:** *[ContainerBuilder](_implementation_container_.containerbuilder.md)*

## Properties

### `Private` asyncFactories

• **asyncFactories**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), Map‹string | number | Symbol, function››* = 
        new Map<LifeCycle, Map<ServiceKey, AsyncServiceFactory<Promise<unknown>>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

*Defined in [src/Implementation/Container.ts:82](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L82)*

___

### `Private` syncFactories

• **syncFactories**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), Map‹string | number | Symbol, function››* = 
        new Map<LifeCycle, Map<ServiceKey, SyncServiceFactory<unknown>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

*Defined in [src/Implementation/Container.ts:77](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L77)*

## Methods

###  addAsyncFactory

▸ **addAsyncFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService››, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/Container.ts:115](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L115)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`factory` | [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService›› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  addConstructor

▸ **addConstructor**<**TConstructor**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `constructor`: [ServiceConstructor](../modules/_interfaces_.md#serviceconstructor)‹TConstructor›, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/Container.ts:110](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L110)*

**Type parameters:**

▪ **TConstructor**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`constructor` | [ServiceConstructor](../modules/_interfaces_.md#serviceconstructor)‹TConstructor› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  addFactory

▸ **addFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService›, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/Container.ts:91](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L91)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`factory` | [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  build

▸ **build**(): *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/Container.ts:101](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L101)*

**Returns:** *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

___

###  isAlreadyRegistered

▸ **isAlreadyRegistered**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Implementation/Container.ts:123](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/Container.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
