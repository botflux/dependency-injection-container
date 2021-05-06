[@botflx/dependency-injection-container - v2.0.3](../README.md) › [Globals](../globals.md) › ["Implementation/ScopedContainer"](../modules/_implementation_scopedcontainer_.md) › [ScopedContainer](_implementation_scopedcontainer_.scopedcontainer.md)

# Class: ScopedContainer

## Hierarchy

* **ScopedContainer**

## Implements

* [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)

## Index

### Constructors

* [constructor](_implementation_scopedcontainer_.scopedcontainer.md#constructor)

### Properties

* [innerContainer](_implementation_scopedcontainer_.scopedcontainer.md#private-innercontainer)
* [parentContainer](_implementation_scopedcontainer_.scopedcontainer.md#private-parentcontainer)

### Methods

* [get](_implementation_scopedcontainer_.scopedcontainer.md#get)
* [getAsync](_implementation_scopedcontainer_.scopedcontainer.md#getasync)
* [has](_implementation_scopedcontainer_.scopedcontainer.md#has)
* [hasAsync](_implementation_scopedcontainer_.scopedcontainer.md#hasasync)

## Constructors

###  constructor

\+ **new ScopedContainer**(`parentContainer`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md), `innerContainer`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[ScopedContainer](_implementation_scopedcontainer_.scopedcontainer.md)*

*Defined in [src/Implementation/ScopedContainer.ts:11](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`parentContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[ScopedContainer](_implementation_scopedcontainer_.scopedcontainer.md)*

## Properties

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:14](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L14)*

___

### `Private` parentContainer

• **parentContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:13](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L13)*

## Methods

###  get

▸ **get**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *T*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:18](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L18)*

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

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:26](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L26)*

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

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:34](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:38](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Implementation/ScopedContainer.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
