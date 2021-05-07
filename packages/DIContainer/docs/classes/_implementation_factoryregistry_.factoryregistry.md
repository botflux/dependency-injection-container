[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Implementation/FactoryRegistry"](../modules/_implementation_factoryregistry_.md) › [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)

# Class: FactoryRegistry

## Hierarchy

* **FactoryRegistry**

  ↳ [TransientFactoryRegistry](_implementation_factoryregistry_.transientfactoryregistry.md)

  ↳ [SingletonFactoryRegistry](_implementation_factoryregistry_.singletonfactoryregistry.md)

## Index

### Constructors

* [constructor](_implementation_factoryregistry_.factoryregistry.md#constructor)

### Properties

* [factoriesMap](_implementation_factoryregistry_.factoryregistry.md#protected-factoriesmap)

### Methods

* [getFactory](_implementation_factoryregistry_.factoryregistry.md#abstract-getfactory)
* [has](_implementation_factoryregistry_.factoryregistry.md#has)

## Constructors

###  constructor

\+ **new FactoryRegistry**(`factoriesMap`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››): *[FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)*

*Defined in [src/Implementation/FactoryRegistry.ts:3](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`factoriesMap` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›› |

**Returns:** *[FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)*

## Properties

### `Protected` factoriesMap

• **factoriesMap**: *Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››*

*Defined in [src/Implementation/FactoryRegistry.ts:4](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L4)*

## Methods

### `Abstract` getFactory

▸ **getFactory**<**TService**>(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› | undefined*

*Defined in [src/Implementation/FactoryRegistry.ts:7](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L7)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› | undefined*

___

###  has

▸ **has**(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Implementation/FactoryRegistry.ts:9](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
