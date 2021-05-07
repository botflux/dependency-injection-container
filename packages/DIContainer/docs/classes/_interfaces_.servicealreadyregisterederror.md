[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [ServiceAlreadyRegisteredError](_interfaces_.servicealreadyregisterederror.md)

# Class: ServiceAlreadyRegisteredError

## Hierarchy

* Error

  ↳ **ServiceAlreadyRegisteredError**

## Index

### Constructors

* [constructor](_interfaces_.servicealreadyregisterederror.md#constructor)

### Properties

* [message](_interfaces_.servicealreadyregisterederror.md#message)
* [name](_interfaces_.servicealreadyregisterederror.md#name)
* [stack](_interfaces_.servicealreadyregisterederror.md#optional-stack)
* [Error](_interfaces_.servicealreadyregisterederror.md#static-error)

## Constructors

###  constructor

\+ **new ServiceAlreadyRegisteredError**(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *[ServiceAlreadyRegisteredError](_interfaces_.servicealreadyregisterederror.md)*

*Defined in [src/Interfaces.ts:38](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Interfaces.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *[ServiceAlreadyRegisteredError](_interfaces_.servicealreadyregisterederror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
