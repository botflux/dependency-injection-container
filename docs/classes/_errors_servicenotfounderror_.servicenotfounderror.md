[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["errors/ServiceNotFoundError"](../modules/_errors_servicenotfounderror_.md) › [ServiceNotFoundError](_errors_servicenotfounderror_.servicenotfounderror.md)

# Class: ServiceNotFoundError

The service container has no service matching a given key.

## Hierarchy

* Error

  ↳ **ServiceNotFoundError**

## Index

### Constructors

* [constructor](_errors_servicenotfounderror_.servicenotfounderror.md#constructor)

### Properties

* [message](_errors_servicenotfounderror_.servicenotfounderror.md#message)
* [name](_errors_servicenotfounderror_.servicenotfounderror.md#name)
* [stack](_errors_servicenotfounderror_.servicenotfounderror.md#optional-stack)
* [Error](_errors_servicenotfounderror_.servicenotfounderror.md#static-error)

## Constructors

###  constructor

\+ **new ServiceNotFoundError**(`key`: string, ...`args`: any[]): *[ServiceNotFoundError](_errors_servicenotfounderror_.servicenotfounderror.md)*

*Defined in [src/errors/ServiceNotFoundError.ts:4](https://github.com/botflux/dependency-injection-container/blob/f4a99c3/src/errors/ServiceNotFoundError.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`...args` | any[] |

**Returns:** *[ServiceNotFoundError](_errors_servicenotfounderror_.servicenotfounderror.md)*

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
