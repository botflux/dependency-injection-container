[@botflx/dependency-injection-container - v2.0.4](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](../modules/_implementation_serviceprovider_.md) › [AsyncServiceProvider](_implementation_serviceprovider_.asyncserviceprovider.md)

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

*Defined in [src/Implementation/ServiceProvider.ts:38](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[AsyncServiceProvider](_implementation_serviceprovider_.asyncserviceprovider.md)*

## Properties

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:40](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L40)*

___

### `Private` syncProvider

• **syncProvider**: *[SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:38](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L38)*

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:44](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L44)*

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

*Defined in [src/Implementation/ServiceProvider.ts:48](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L48)*

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

*Defined in [src/Implementation/ServiceProvider.ts:52](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:56](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
