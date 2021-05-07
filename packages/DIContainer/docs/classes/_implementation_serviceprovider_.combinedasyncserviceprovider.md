[@botflx/dependency-injection-container - v2.0.4](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](../modules/_implementation_serviceprovider_.md) › [CombinedAsyncServiceProvider](_implementation_serviceprovider_.combinedasyncserviceprovider.md)

# Class: CombinedAsyncServiceProvider

## Hierarchy

* **CombinedAsyncServiceProvider**

## Implements

* [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)

## Index

### Constructors

* [constructor](_implementation_serviceprovider_.combinedasyncserviceprovider.md#constructor)

### Properties

* [providers](_implementation_serviceprovider_.combinedasyncserviceprovider.md#private-providers)

### Methods

* [get](_implementation_serviceprovider_.combinedasyncserviceprovider.md#get)
* [getAsync](_implementation_serviceprovider_.combinedasyncserviceprovider.md#getasync)
* [has](_implementation_serviceprovider_.combinedasyncserviceprovider.md#has)
* [hasAsync](_implementation_serviceprovider_.combinedasyncserviceprovider.md#hasasync)

## Constructors

###  constructor

\+ **new CombinedAsyncServiceProvider**(`providers`: [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)[]): *[CombinedAsyncServiceProvider](_implementation_serviceprovider_.combinedasyncserviceprovider.md)*

*Defined in [src/Implementation/ServiceProvider.ts:61](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`providers` | [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)[] |

**Returns:** *[CombinedAsyncServiceProvider](_implementation_serviceprovider_.combinedasyncserviceprovider.md)*

## Properties

### `Private` providers

• **providers**: *[AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)[]*

*Defined in [src/Implementation/ServiceProvider.ts:62](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L62)*

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:64](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L64)*

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

*Defined in [src/Implementation/ServiceProvider.ts:74](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L74)*

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

*Defined in [src/Implementation/ServiceProvider.ts:84](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:88](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ServiceProvider.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
