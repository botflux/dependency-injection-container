[@botflx/dependency-injection-container - v1.2.8](../README.md) › [Globals](../globals.md) › ["ServiceContainer"](../modules/_servicecontainer_.md) › [ServiceContainer](_servicecontainer_.servicecontainer.md)

# Class: ServiceContainer

An implementation of ServiceContainer.
If you want to use @Inject decorator, you should use ReflectServiceContainer class.

```typescript
class Logger {}
class Db {
    constructor(container: IServiceContainer) {
        container.get<Logger>('logger')
        container.get<{ dbUser: string, dbPass: string }>('options')
    }
}

const container = new ReflectServiceContainer()
     .addFactory('config', () => ({ dbUser: 'user', dbPass: 'pass' })
     .add('logger', Logger)
     .add('db', Db)

const logger = container.get<Logger>('logger')
const db = container.get<Db>('db')

// You can also delete services.
container.delete('db', Db)
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

* **ServiceContainer**

## Implements

* [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)

## Index

### Properties

* [_services](_servicecontainer_.servicecontainer.md#private-_services)

### Accessors

* [services](_servicecontainer_.servicecontainer.md#services)

### Methods

* [add](_servicecontainer_.servicecontainer.md#add)
* [addFactory](_servicecontainer_.servicecontainer.md#addfactory)
* [delete](_servicecontainer_.servicecontainer.md#delete)
* [get](_servicecontainer_.servicecontainer.md#get)
* [resolve](_servicecontainer_.servicecontainer.md#resolve)
* [resolveFactory](_servicecontainer_.servicecontainer.md#resolvefactory)

## Properties

### `Private` _services

• **_services**: *[ServiceContainerDictionary](../modules/_servicecontainerdictionary_.md#servicecontainerdictionary)*

*Defined in [src/ServiceContainer.ts:48](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L48)*

## Accessors

###  services

• **get services**(): *object*

*Defined in [src/ServiceContainer.ts:101](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L101)*

Return the service inner container.
You should use this only for test purposes.

**Returns:** *object*

* \[ **key**: *string*\]: any

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/ServiceContainer.ts:58](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L58)*

Add a new service using service's constructor.

**`throws`** ServiceAlreadyRegisteredError

**Parameters:**

▪ **key**: *string*

▪ **constructor**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

**Returns:** *this*

___

###  addFactory

▸ **addFactory**(`key`: string, `factory`: [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)): *this*

*Implementation of [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Defined in [src/ServiceContainer.ts:72](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L72)*

Add a new service using a service factory function.

**`throws`** ServiceAlreadyRegisteredError

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | - |
`factory` | [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *this*

___

###  delete

▸ **delete**(`key`: string): *this*

*Implementation of [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Defined in [src/ServiceContainer.ts:112](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L112)*

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

*Implementation of [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Defined in [src/ServiceContainer.ts:89](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L89)*

Return the service matching the passed key.

**`throws`** ServiceNotFoundError

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *T*

___

###  resolve

▸ **resolve**<**TService**>(`constructor`: object): *TService*

*Defined in [src/ServiceContainer.ts:128](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L128)*

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

▸ **resolveFactory**<**TService**>(`factory`: [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)): *TService*

*Implementation of [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Defined in [src/ServiceContainer.ts:138](https://github.com/botflux/dependency-injection-container/blob/66e2228/src/ServiceContainer.ts#L138)*

Resolve a factory function.
It will have the same effect as `addFactory` ut without registering the instance in the container.

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *TService*
