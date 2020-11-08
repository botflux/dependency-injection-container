[@botflx/dependency-injection-container - v1.4.2](../README.md) › [Globals](../globals.md) › ["IServiceContainer"](../modules/_iservicecontainer_.md) › [IServiceContainer](_iservicecontainer_.iservicecontainer.md)

# Interface: IServiceContainer

Service container itself.
If you want to get a class instance implementing this interface you should use `IServiceContainerFactory`.
You should avoid instantiate IServiceContainer implementation directly, instead use an `IServiceContainerFactory`.

```typescript
const simpleContainer: IServiceContainer = new ServiceContainer()
// /!\ Need npm install reflect-metadata
const reflectContainer: IServiceContainer = new ReflectServiceContainer()

// ===

const simpleContainer: IServiceContainer = new ServiceContainerFactory().create()
// /!\ Need npm install reflect-metadata
const reflectContainer: IServiceContainer = new ServiceContainerFactory({ useReflection: true }).create()
```

```typescript
class Logger {
     private readonly _logPath

    constructor(container: IServiceContainer) {
        this._logPath = container.get<{ logPath: string }>('config').logPath
    }

    log(message: string) {}
}

const container: IServiceContainer = new ServiceContainerFactory().create()
container
     .addFactory('config', () => ({ logPath: '../var/app.log' }))
     .add('logger', Logger)

container.get<Logger>('logger').log('my message')
```

```typescript
// You can also delete services
const container: IServiceContainer = new ServiceContainerFactory()
     .create()
     .addFactory('config', () => ({ secret: 'hello' }))
     .delete('config')
```

```typescript
const container: IServiceContainer = createServiceContainer()
     .addFactory('connectionString', () => 'mysql://localhost:3306/myDb?user=root&password=root')

class Repository {
     private readonly _connectionString: string

    constructor(container: IServiceContainer) {
        this._connectionString = container.get<string>('connectionString')
    }
}

const repository: Repository = container.resolve<Repository>(Repository)
```

## Hierarchy

* **IServiceContainer**

## Implemented by

* [ReflectServiceContainer](../classes/_reflectservicecontainer_.reflectservicecontainer.md)
* [ServiceContainer](../classes/_servicecontainer_.servicecontainer.md)

## Index

### Methods

* [add](_iservicecontainer_.iservicecontainer.md#add)
* [addFactory](_iservicecontainer_.iservicecontainer.md#addfactory)
* [delete](_iservicecontainer_.iservicecontainer.md#delete)
* [get](_iservicecontainer_.iservicecontainer.md#get)
* [resolve](_iservicecontainer_.iservicecontainer.md#resolve)
* [resolveFactory](_iservicecontainer_.iservicecontainer.md#resolvefactory)

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/IServiceContainer.ts:72](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L72)*

Add a new service to the container.
This method is fluent.

**`throws`** ServiceAlreadyRegisteredError Thrown when the key you want to use is already taken.

**Parameters:**

▪ **key**: *string*

A unique string

▪ **constructor**: *object*

Service's constructor

Name | Type |
------ | ------ |
`constructor` |  |

**Returns:** *this*

___

###  addFactory

▸ **addFactory**(`key`: string, `factory`: [IServiceFactoryFunction](_iservicefactoryfunction_.iservicefactoryfunction.md)): *this*

*Defined in [src/IServiceContainer.ts:81](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L81)*

Add a new service factory to the container.
It works the same way as add() but with a function as parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | - |
`factory` | [IServiceFactoryFunction](_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *this*

___

###  delete

▸ **delete**(`key`: string): *this*

*Defined in [src/IServiceContainer.ts:100](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L100)*

Delete the service matching the given key.

**`throws`** ServiceNotFoundError Thrown when no service is matching the passed key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *this*

___

###  get

▸ **get**<**T**>(`key`: string): *T*

*Defined in [src/IServiceContainer.ts:91](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L91)*

Return the service matching the passed key.
The found service will be casted to the specified generic type.

**`throws`** ServiceNotFoundError Thrown when no service in matching the passed key.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Service's unique string  |

**Returns:** *T*

___

###  resolve

▸ **resolve**<**TService**>(`constructor`: object): *TService*

*Defined in [src/IServiceContainer.ts:108](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L108)*

Resolve a constructor.
It will have the same effect as `add` ut without registering the instance in the container.

**Type parameters:**

▪ **TService**

**Parameters:**

▪ **constructor**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

**Returns:** *TService*

___

###  resolveFactory

▸ **resolveFactory**<**TService**>(`factory`: [IServiceFactoryFunction](_iservicefactoryfunction_.iservicefactoryfunction.md)): *TService*

*Defined in [src/IServiceContainer.ts:116](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/IServiceContainer.ts#L116)*

Resolve a factory function.
It will have the same effect as `addFactory` ut without registering the instance in the container.

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [IServiceFactoryFunction](_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *TService*
