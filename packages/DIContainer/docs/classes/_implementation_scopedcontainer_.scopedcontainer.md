[@botflx/dependency-injection-container - v2.0.4](../README.md) › [Globals](../globals.md) › ["Implementation/ScopedContainer"](../modules/_implementation_scopedcontainer_.md) › [ScopedContainer](_implementation_scopedcontainer_.scopedcontainer.md)

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

*Defined in [src/Implementation/ScopedContainer.ts:16](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`parentContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[ScopedContainer](_implementation_scopedcontainer_.scopedcontainer.md)*

## Properties

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:19](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L19)*

___

### `Private` parentContainer

• **parentContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:18](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L18)*

## Methods

###  get

▸ **get**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *T*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:23](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L23)*

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

*Defined in [src/Implementation/ScopedContainer.ts:35](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L35)*

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

*Defined in [src/Implementation/ScopedContainer.ts:47](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*

___

###  hasAsync

▸ **hasAsync**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:51](https://github.com/botflux/dependency-injection-container/blob/aff9924/packages/DIContainer/src/Implementation/ScopedContainer.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
