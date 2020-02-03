[@botflx/dependency-injection-container - v1.2.0](../README.md) › [Globals](../globals.md) › ["IServiceContainer"](../modules/_iservicecontainer_.md) › [IServiceContainer](_iservicecontainer_.iservicecontainer.md)

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

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/IServiceContainer.ts:57](https://github.com/botflux/dependency-injection-container/blob/a377b37/src/IServiceContainer.ts#L57)*

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

*Defined in [src/IServiceContainer.ts:66](https://github.com/botflux/dependency-injection-container/blob/a377b37/src/IServiceContainer.ts#L66)*

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

*Defined in [src/IServiceContainer.ts:85](https://github.com/botflux/dependency-injection-container/blob/a377b37/src/IServiceContainer.ts#L85)*

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

*Defined in [src/IServiceContainer.ts:76](https://github.com/botflux/dependency-injection-container/blob/a377b37/src/IServiceContainer.ts#L76)*

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
