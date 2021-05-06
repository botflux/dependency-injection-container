[@botflx/dependency-injection-container - v2.0.3](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [AsyncServiceProviderInterface](_interfaces_.asyncserviceproviderinterface.md)

# Interface: AsyncServiceProviderInterface

## Hierarchy

* [SyncServiceProviderInterface](_interfaces_.syncserviceproviderinterface.md)

  ↳ **AsyncServiceProviderInterface**

## Implemented by

* [AsyncServiceProvider](../classes/_implementation_serviceprovider_.asyncserviceprovider.md)

## Index

### Methods

* [get](_interfaces_.asyncserviceproviderinterface.md#get)
* [getAsync](_interfaces_.asyncserviceproviderinterface.md#getasync)
* [has](_interfaces_.asyncserviceproviderinterface.md#has)
* [hasAsync](_interfaces_.asyncserviceproviderinterface.md#hasasync)

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Inherited from [SyncServiceProviderInterface](_interfaces_.syncserviceproviderinterface.md).[get](_interfaces_.syncserviceproviderinterface.md#get)*

*Defined in [src/Interfaces.ts:24](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L24)*

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

*Defined in [src/Interfaces.ts:29](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L29)*

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

*Inherited from [SyncServiceProviderInterface](_interfaces_.syncserviceproviderinterface.md).[has](_interfaces_.syncserviceproviderinterface.md#has)*

*Defined in [src/Interfaces.ts:25](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Interfaces.ts:30](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
