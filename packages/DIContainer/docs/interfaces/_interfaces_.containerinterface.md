[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [ContainerInterface](_interfaces_.containerinterface.md)

# Interface: ContainerInterface

## Hierarchy

* **ContainerInterface**

## Implemented by

* [Container](../classes/_implementation_container_.container.md)
* [ScopedContainer](../classes/_implementation_scopedcontainer_.scopedcontainer.md)

## Index

### Methods

* [get](_interfaces_.containerinterface.md#get)
* [getAsync](_interfaces_.containerinterface.md#getasync)
* [has](_interfaces_.containerinterface.md#has)
* [hasAsync](_interfaces_.containerinterface.md#hasasync)

## Methods

###  get

▸ **get**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *T*

*Defined in [src/Interfaces.ts:2](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L2)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *T*

___

###  getAsync

▸ **getAsync**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *Promise‹T›*

*Defined in [src/Interfaces.ts:3](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *Promise‹T›*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Interfaces.ts:5](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Defined in [src/Interfaces.ts:6](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
