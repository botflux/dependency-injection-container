[@botflx/dependency-injection-container - v2.0.3](../README.md) › [Globals](../globals.md) › ["Implementation/Container"](../modules/_implementation_container_.md) › [Container](_implementation_container_.container.md)

# Class: Container

## Hierarchy

* **Container**

## Implements

* [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)

## Index

### Constructors

* [constructor](_implementation_container_.container.md#constructor)

### Properties

* [asyncFactoriesRegistry](_implementation_container_.container.md#private-asyncfactoriesregistry)
* [syncFactoriesRegistry](_implementation_container_.container.md#private-syncfactoriesregistry)

### Methods

* [get](_implementation_container_.container.md#get)
* [getAsync](_implementation_container_.container.md#getasync)
* [has](_implementation_container_.container.md#has)
* [hasAsync](_implementation_container_.container.md#hasasync)

## Constructors

###  constructor

\+ **new Container**(`syncSingletonFactories`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››, `syncTransientFactories`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››, `asyncSingletonFactories`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹Promise‹unknown›››, `asyncTransientFactories`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹Promise‹unknown›››): *[Container](_implementation_container_.container.md)*

*Defined in [src/Implementation/Container.ts:27](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`syncSingletonFactories` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›› |
`syncTransientFactories` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›› |
`asyncSingletonFactories` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹Promise‹unknown››› |
`asyncTransientFactories` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹Promise‹unknown››› |

**Returns:** *[Container](_implementation_container_.container.md)*

## Properties

### `Private` asyncFactoriesRegistry

• **asyncFactoriesRegistry**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)‹››* = 
        new Map<LifeCycle, FactoryRegistry>()

*Defined in [src/Implementation/Container.ts:26](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L26)*

___

### `Private` syncFactoriesRegistry

• **syncFactoriesRegistry**: *Map‹[LifeCycle](../enums/_interfaces_.lifecycle.md), [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)‹››* = 
        new Map<LifeCycle, FactoryRegistry>()

*Defined in [src/Implementation/Container.ts:23](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L23)*

## Methods

###  get

▸ **get**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *T*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/Container.ts:41](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L41)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *T*

___

###  getAsync

▸ **getAsync**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *Promise‹T›*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/Container.ts:52](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L52)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *Promise‹T›*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/Container.ts:63](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/Container.ts:69](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/Container.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
