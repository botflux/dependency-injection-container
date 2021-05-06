[@botflx/dependency-injection-container - v2.0.1](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](_implementation_serviceprovider_.md)

# External module: "Implementation/ServiceProvider"

## Index

### Classes

* [AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)
* [SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)

### Functions

* [createAsyncServiceProvider](_implementation_serviceprovider_.md#const-createasyncserviceprovider)
* [createSyncServiceProvider](_implementation_serviceprovider_.md#const-createsyncserviceprovider)

## Functions

### `Const` createAsyncServiceProvider

▸ **createAsyncServiceProvider**(`container`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:47](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/ServiceProvider.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)‹›*

___

### `Const` createSyncServiceProvider

▸ **createSyncServiceProvider**(`container`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)‹›*

*Defined in [src/Implementation/ServiceProvider.ts:44](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Implementation/ServiceProvider.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)‹›*
