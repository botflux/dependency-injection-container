[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Implementation/Container"](../modules/_implementation_container_.md) › [ContainerBuilder](_implementation_container_.containerbuilder.md)

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
* [createAsyncProvider](_implementation_container_.containerbuilder.md#private-createasyncprovider)
* [createProvider](_implementation_container_.containerbuilder.md#private-createprovider)
* [syncFactories](_implementation_container_.containerbuilder.md#private-syncfactories)

### Methods

* [addAsyncFactory](_implementation_container_.containerbuilder.md#addasyncfactory)
* [addConstructor](_implementation_container_.containerbuilder.md#addconstructor)
* [addFactory](_implementation_container_.containerbuilder.md#addfactory)
* [build](_implementation_container_.containerbuilder.md#build)
* [isAlreadyRegistered](_implementation_container_.containerbuilder.md#isalreadyregistered)

## Constructors

###  constructor

\+ **new ContainerBuilder**(`options`: [CreateContainerBuilderOptions](../modules/_implementation_container_.md#createcontainerbuilderoptions), `createProvider`: function, `createAsyncProvider`: function): *[ContainerBuilder](_implementation_container_.containerbuilder.md)*

*Defined in [src/Implementation/Container.ts:87](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L87)*

**Parameters:**

▪ **options**: *[CreateContainerBuilderOptions](../modules/_implementation_container_.md#createcontainerbuilderoptions)*

▪`Default value`  **createProvider**: *function*=  createSyncServiceProvider

▸ (`containerInterface`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

**Parameters:**

Name | Type |
------ | ------ |
`containerInterface` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

▪`Default value`  **createAsyncProvider**: *function*=  createAsyncServiceProvider

▸ (`containerInterface`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

**Parameters:**

Name | Type |
------ | ------ |
`containerInterface` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[ContainerBuilder](_implementation_container_.containerbuilder.md)*

## Properties

### `Private` asyncFactories

• **asyncFactories**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), Map‹string | number | Symbol, function››* = 
        new Map<LifeCycle, Map<ServiceKey, AsyncServiceFactory<Promise<unknown>>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

*Defined in [src/Implementation/Container.ts:84](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L84)*

___

### `Private` createAsyncProvider

• **createAsyncProvider**: *function*

*Defined in [src/Implementation/Container.ts:91](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L91)*

#### Type declaration:

▸ (`containerInterface`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

**Parameters:**

Name | Type |
------ | ------ |
`containerInterface` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

___

### `Private` createProvider

• **createProvider**: *function*

*Defined in [src/Implementation/Container.ts:90](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L90)*

#### Type declaration:

▸ (`containerInterface`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

**Parameters:**

Name | Type |
------ | ------ |
`containerInterface` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

___

### `Private` syncFactories

• **syncFactories**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), Map‹string | number | Symbol, function››* = 
        new Map<LifeCycle, Map<ServiceKey, SyncServiceFactory<unknown>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

*Defined in [src/Implementation/Container.ts:79](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L79)*

## Methods

###  addAsyncFactory

▸ **addAsyncFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService››, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/Container.ts:122](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L122)*

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

*Defined in [src/Implementation/Container.ts:117](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L117)*

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

*Defined in [src/Implementation/Container.ts:96](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L96)*

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

*Defined in [src/Implementation/Container.ts:106](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L106)*

**Returns:** *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

___

###  isAlreadyRegistered

▸ **isAlreadyRegistered**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Implementation/Container.ts:130](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
