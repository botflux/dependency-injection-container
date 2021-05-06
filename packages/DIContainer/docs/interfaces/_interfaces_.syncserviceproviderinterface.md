[@botflx/dependency-injection-container - v2.0.1](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [SyncServiceProviderInterface](_interfaces_.syncserviceproviderinterface.md)

# Interface: SyncServiceProviderInterface

## Hierarchy

* **SyncServiceProviderInterface**

  ↳ [AsyncServiceProviderInterface](_interfaces_.asyncserviceproviderinterface.md)

## Implemented by

* [SyncServiceProvider](../classes/_implementation_serviceprovider_.syncserviceprovider.md)

## Index

### Methods

* [get](_interfaces_.syncserviceproviderinterface.md#get)
* [has](_interfaces_.syncserviceproviderinterface.md#has)

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Defined in [src/Interfaces.ts:24](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Interfaces.ts#L24)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *TService*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Interfaces.ts:25](https://github.com/botflux/dependency-injection-container/blob/49e0ae1/packages/DIContainer/src/Interfaces.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
