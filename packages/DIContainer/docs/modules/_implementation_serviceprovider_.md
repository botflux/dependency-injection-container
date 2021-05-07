[@botflx/dependency-injection-container - v2.0.4](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](_implementation_serviceprovider_.md)

# External module: "Implementation/ServiceProvider"

## Index

### Classes

* [AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)
* [CombinedAsyncServiceProvider](../classes/_implementation_serviceprovider_.combinedasyncserviceprovider.md)
* [CombinedSyncServiceProvider](../classes/_implementation_serviceprovider_.combinedsyncserviceprovider.md)
* [SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)

### Functions

* [createAsyncServiceProvider](_implementation_serviceprovider_.md#const-createasyncserviceprovider)
* [createCombinedAsyncServiceProvider](_implementation_serviceprovider_.md#const-createcombinedasyncserviceprovider)
* [createCombinedSyncServiceProvider](_implementation_serviceprovider_.md#const-createcombinedsyncserviceprovider)
* [createSyncServiceProvider](_implementation_serviceprovider_.md#const-createsyncserviceprovider)

## Functions

### `Const` createAsyncServiceProvider

▸ **createAsyncServiceProvider**(`container`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:102](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)‹›*

___

### `Const` createCombinedAsyncServiceProvider

▸ **createCombinedAsyncServiceProvider**(`providers`: [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)[]): *[CombinedAsyncServiceProvider](../classes/_implementation_serviceprovider_.combinedasyncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:99](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`providers` | [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)[] |

**Returns:** *[CombinedAsyncServiceProvider](../classes/_implementation_serviceprovider_.combinedasyncserviceprovider.md)‹›*

___

### `Const` createCombinedSyncServiceProvider

▸ **createCombinedSyncServiceProvider**(`providers`: [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)[]): *[CombinedSyncServiceProvider](../classes/_implementation_serviceprovider_.combinedsyncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:96](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`providers` | [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)[] |

**Returns:** *[CombinedSyncServiceProvider](../classes/_implementation_serviceprovider_.combinedsyncserviceprovider.md)‹›*

___

### `Const` createSyncServiceProvider

▸ **createSyncServiceProvider**(`container`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:93](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)‹›*
