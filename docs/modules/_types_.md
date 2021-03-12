[@botflx/dependency-injection-container - v1.6.0](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Type aliases

* [Constructor](_types_.md#constructor)
* [ImportService](_types_.md#importservice)
* [ServiceContainerDictionary](_types_.md#servicecontainerdictionary)

## Type aliases

###  Constructor

Ƭ **Constructor**: *object*

*Defined in [src/types.ts:9](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/types.ts#L9)*

Describe a class constructor.

#### Type declaration:

* **new __type**(...`args`: any[]): *any*

___

###  ImportService

Ƭ **ImportService**: *object*

*Defined in [src/types.ts:28](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/types.ts#L28)*

Represents an item of ServiceLoader / ReflectServiceLoader
*T* is always Constructor or IServiceFactoryFunction

```typescript
import { Constructor, ImportService, IServiceFactoryFunction } from '@botflx/dependency-injection-container'

class MyService {}
class AnotherService {}

const myServiceImport: ImportService<Constructor> = { name: 'myService', service: MyService }
const anotherServiceImport: ImportService<Constructor> = { name: 'anotherService', service: MyService }

const myServiceFactoryImport: ImportService<IServiceFactoryFunction> = { name: 'myService', service: container => new MyService(container) }
const anotherServiceFactoryImport: ImportService<IServiceFactoryFunction> = { name: 'anotherService', service: container => new MyService(container) }
```

#### Type declaration:

* **name**: *string*

* **service**: *T*

___

###  ServiceContainerDictionary

Ƭ **ServiceContainerDictionary**: *object*

*Defined in [src/types.ts:4](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/types.ts#L4)*

An example of service container "container".

#### Type declaration:

* \[ **key**: *string*\]: any
