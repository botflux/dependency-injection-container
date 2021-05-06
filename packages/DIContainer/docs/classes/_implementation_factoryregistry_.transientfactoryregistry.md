[@botflx/dependency-injection-container - v2.0.1](../README.md) › [Globals](../globals.md) › ["Implementation/FactoryRegistry"](../modules/_implementation_factoryregistry_.md) › [TransientFactoryRegistry](_implementation_factoryregistry_.transientfactoryregistry.md)

# Class: TransientFactoryRegistry

## Hierarchy

* [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)

  ↳ **TransientFactoryRegistry**

## Index

### Constructors

* [constructor](_implementation_factoryregistry_.transientfactoryregistry.md#constructor)

### Properties

* [factoriesMap](_implementation_factoryregistry_.transientfactoryregistry.md#protected-factoriesmap)

### Methods

* [getFactory](_implementation_factoryregistry_.transientfactoryregistry.md#getfactory)
* [has](_implementation_factoryregistry_.transientfactoryregistry.md#has)

## Constructors

###  constructor

\+ **new TransientFactoryRegistry**(`factoriesMap`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››): *[TransientFactoryRegistry](_implementation_factoryregistry_.transientfactoryregistry.md)*

*Inherited from [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[constructor](_implementation_factoryregistry_.factoryregistry.md#constructor)*

*Defined in [src/Implementation/FactoryRegistry.ts:3](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`factoriesMap` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›› |

**Returns:** *[TransientFactoryRegistry](_implementation_factoryregistry_.transientfactoryregistry.md)*

## Properties

### `Protected` factoriesMap

• **factoriesMap**: *Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››*

*Inherited from [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[factoriesMap](_implementation_factoryregistry_.factoryregistry.md#protected-factoriesmap)*

*Defined in [src/Implementation/FactoryRegistry.ts:4](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L4)*

## Methods

###  getFactory

▸ **getFactory**<**TService**>(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› | undefined*

*Overrides [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[getFactory](_implementation_factoryregistry_.factoryregistry.md#abstract-getfactory)*

*Defined in [src/Implementation/FactoryRegistry.ts:13](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L13)*

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

*Inherited from [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)*

*Defined in [src/Implementation/FactoryRegistry.ts:9](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
