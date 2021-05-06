[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Implementation/FactoryRegistry"](../modules/_implementation_factoryregistry_.md) › [SingletonFactoryRegistry](_implementation_factoryregistry_.singletonfactoryregistry.md)

# Class: SingletonFactoryRegistry

## Hierarchy

* [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md)

  ↳ **SingletonFactoryRegistry**

## Index

### Constructors

* [constructor](_implementation_factoryregistry_.singletonfactoryregistry.md#constructor)

### Properties

* [factoriesMap](_implementation_factoryregistry_.singletonfactoryregistry.md#protected-factoriesmap)
* [resolvedSingletons](_implementation_factoryregistry_.singletonfactoryregistry.md#private-resolvedsingletons)

### Methods

* [getFactory](_implementation_factoryregistry_.singletonfactoryregistry.md#getfactory)
* [has](_implementation_factoryregistry_.singletonfactoryregistry.md#has)
* [wrapFactory](_implementation_factoryregistry_.singletonfactoryregistry.md#wrapfactory)

## Constructors

###  constructor

\+ **new SingletonFactoryRegistry**(`factoriesMap`: Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››): *[SingletonFactoryRegistry](_implementation_factoryregistry_.singletonfactoryregistry.md)*

*Inherited from [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[constructor](_implementation_factoryregistry_.factoryregistry.md#constructor)*

*Defined in [src/Implementation/FactoryRegistry.ts:3](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`factoriesMap` | Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›› |

**Returns:** *[SingletonFactoryRegistry](_implementation_factoryregistry_.singletonfactoryregistry.md)*

## Properties

### `Protected` factoriesMap

• **factoriesMap**: *Map‹[ServiceKey](../modules/_interfaces_.md#servicekey), [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown››*

*Inherited from [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[factoriesMap](_implementation_factoryregistry_.factoryregistry.md#protected-factoriesmap)*

*Defined in [src/Implementation/FactoryRegistry.ts:4](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L4)*

___

### `Private` resolvedSingletons

• **resolvedSingletons**: *[ResolvedServicesMap](../modules/_implementation_factoryregistry_.md#resolvedservicesmap)* = 
        new Map<ServiceKey, unknown>()

*Defined in [src/Implementation/FactoryRegistry.ts:26](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L26)*

## Methods

###  getFactory

▸ **getFactory**<**TService**>(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› | undefined*

*Overrides [FactoryRegistry](_implementation_factoryregistry_.factoryregistry.md).[getFactory](_implementation_factoryregistry_.factoryregistry.md#abstract-getfactory)*

*Defined in [src/Implementation/FactoryRegistry.ts:39](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L39)*

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

*Defined in [src/Implementation/FactoryRegistry.ts:9](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  wrapFactory

▸ **wrapFactory**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›): *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›*

*Defined in [src/Implementation/FactoryRegistry.ts:29](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/FactoryRegistry.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`factory` | [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown› |

**Returns:** *[SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹unknown›*
