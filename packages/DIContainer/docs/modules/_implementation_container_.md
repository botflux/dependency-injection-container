[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Implementation/Container"](_implementation_container_.md)

# External module: "Implementation/Container"

## Index

### Classes

* [Container](../classes/_implementation_container_.container.md)
* [ContainerBuilder](../classes/_implementation_container_.containerbuilder.md)

### Type aliases

* [CreateContainerBuilderOptions](_implementation_container_.md#createcontainerbuilderoptions)

### Functions

* [createContainerBuilder](_implementation_container_.md#const-createcontainerbuilder)

### Object literals

* [defaultOptions](_implementation_container_.md#const-defaultoptions)

## Type aliases

###  CreateContainerBuilderOptions

Ƭ **CreateContainerBuilderOptions**: *object*

*Defined in [src/Implementation/Container.ts:139](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L139)*

#### Type declaration:

* **loaders**: *[ServiceLoaderInterface](_interfaces_.md#serviceloaderinterface)[]*

## Functions

### `Const` createContainerBuilder

▸ **createContainerBuilder**(`options`: [CreateContainerBuilderOptions](_implementation_container_.md#createcontainerbuilderoptions), `createProvider`: function, `createAsyncProvider`: function): *[ContainerBuilder](../classes/_implementation_container_.containerbuilder.md)‹›*

*Defined in [src/Implementation/Container.ts:142](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L142)*

**Parameters:**

▪`Default value`  **options**: *[CreateContainerBuilderOptions](_implementation_container_.md#createcontainerbuilderoptions)*=  defaultOptions

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

**Returns:** *[ContainerBuilder](../classes/_implementation_container_.containerbuilder.md)‹›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [src/Implementation/Container.ts:140](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L140)*

###  loaders

• **loaders**: *never[]* =  []

*Defined in [src/Implementation/Container.ts:140](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/Container.ts#L140)*
