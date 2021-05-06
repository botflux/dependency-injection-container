[@botflx/dependency-injection-container - v2.0.1](../README.md) › [Globals](../globals.md) › ["Implementation/FactoryRegistry"](_implementation_factoryregistry_.md)

# External module: "Implementation/FactoryRegistry"

## Index

### Classes

* [FactoryRegistry](../classes/_implementation_factoryregistry_.factoryregistry.md)
* [SingletonFactoryRegistry](../classes/_implementation_factoryregistry_.singletonfactoryregistry.md)
* [TransientFactoryRegistry](../classes/_implementation_factoryregistry_.transientfactoryregistry.md)

### Type aliases

* [ResolvedServicesMap](_implementation_factoryregistry_.md#resolvedservicesmap)

### Functions

* [createSingletonFactoryRegistry](_implementation_factoryregistry_.md#const-createsingletonfactoryregistry)
* [createTransientFactoryRegistry](_implementation_factoryregistry_.md#const-createtransientfactoryregistry)

## Type aliases

###  ResolvedServicesMap

Ƭ **ResolvedServicesMap**: *Map‹[ServiceKey](_interfaces_.md#servicekey), unknown›*

*Defined in [src/Implementation/FactoryRegistry.ts:23](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L23)*

## Functions

### `Const` createSingletonFactoryRegistry

▸ **createSingletonFactoryRegistry**(`factoriesMap`: Map‹[ServiceKey](_interfaces_.md#servicekey), [SyncServiceFactory](_interfaces_.md#syncservicefactory)‹unknown››): *[SingletonFactoryRegistry](../classes/_implementation_factoryregistry_.singletonfactoryregistry.md)‹›*

*Defined in [src/Implementation/FactoryRegistry.ts:49](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`factoriesMap` | Map‹[ServiceKey](_interfaces_.md#servicekey), [SyncServiceFactory](_interfaces_.md#syncservicefactory)‹unknown›› |

**Returns:** *[SingletonFactoryRegistry](../classes/_implementation_factoryregistry_.singletonfactoryregistry.md)‹›*

___

### `Const` createTransientFactoryRegistry

▸ **createTransientFactoryRegistry**(`factoriesMap`: Map‹[ServiceKey](_interfaces_.md#servicekey), [SyncServiceFactory](_interfaces_.md#syncservicefactory)‹unknown››): *[TransientFactoryRegistry](../classes/_implementation_factoryregistry_.transientfactoryregistry.md)‹›*

*Defined in [src/Implementation/FactoryRegistry.ts:52](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`factoriesMap` | Map‹[ServiceKey](_interfaces_.md#servicekey), [SyncServiceFactory](_interfaces_.md#syncservicefactory)‹unknown›› |

**Returns:** *[TransientFactoryRegistry](../classes/_implementation_factoryregistry_.transientfactoryregistry.md)‹›*
