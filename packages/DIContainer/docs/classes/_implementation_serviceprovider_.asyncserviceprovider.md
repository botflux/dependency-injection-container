[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](../modules/_implementation_serviceprovider_.md) › [AsyncServiceProvider](_implementation_serviceprovider_.asyncserviceprovider.md)

# Class: AsyncServiceProvider

## Hierarchy

* **AsyncServiceProvider**

## Implements

* [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)

## Index

### Constructors

* [constructor](_implementation_serviceprovider_.asyncserviceprovider.md#constructor)

### Properties

* [innerContainer](_implementation_serviceprovider_.asyncserviceprovider.md#private-innercontainer)
* [syncProvider](_implementation_serviceprovider_.asyncserviceprovider.md#private-syncprovider)

### Methods

* [get](_implementation_serviceprovider_.asyncserviceprovider.md#get)
* [getAsync](_implementation_serviceprovider_.asyncserviceprovider.md#getasync)
* [has](_implementation_serviceprovider_.asyncserviceprovider.md#has)
* [hasAsync](_implementation_serviceprovider_.asyncserviceprovider.md#hasasync)

## Constructors

###  constructor

\+ **new AsyncServiceProvider**(`innerContainer`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[AsyncServiceProvider](_implementation_serviceprovider_.asyncserviceprovider.md)*

*Defined in [src/Implementation/ServiceProvider.ts:20](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[AsyncServiceProvider](_implementation_serviceprovider_.asyncserviceprovider.md)*

## Properties

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:22](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L22)*

___

### `Private` syncProvider

• **syncProvider**: *[SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:20](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L20)*

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:27](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L27)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *TService*

___

###  getAsync

▸ **getAsync**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *Promise‹TService›*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:31](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L31)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *Promise‹TService›*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:35](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:39](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceProvider.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
