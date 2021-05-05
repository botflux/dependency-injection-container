[@botflx/dependency-injection-container - v1.6.1](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [ServiceNotFoundError](_interfaces_.servicenotfounderror.md)

# Class: ServiceNotFoundError

## Hierarchy

* Error

  ↳ **ServiceNotFoundError**

## Index

### Constructors

* [constructor](_interfaces_.servicenotfounderror.md#constructor)

### Properties

* [message](_interfaces_.servicenotfounderror.md#message)
* [name](_interfaces_.servicenotfounderror.md#name)
* [stack](_interfaces_.servicenotfounderror.md#optional-stack)
* [Error](_interfaces_.servicenotfounderror.md#static-error)

## Constructors

###  constructor

\+ **new ServiceNotFoundError**(`serviceKey`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *[ServiceNotFoundError](_interfaces_.servicenotfounderror.md)*

*Defined in [src/Interfaces.ts:44](https://github.com/botflux/dependency-injection-container/blob/a5ee3f9/packages/DIContainer/src/Interfaces.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *[ServiceNotFoundError](_interfaces_.servicenotfounderror.md)*

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
