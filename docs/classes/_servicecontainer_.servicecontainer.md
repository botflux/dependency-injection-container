[dependency-injection-container - v0.0.1](../README.md) › [Globals](../globals.md) › ["ServiceContainer"](../modules/_servicecontainer_.md) › [ServiceContainer](_servicecontainer_.servicecontainer.md)

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

## Properties

### `Private` _services

• **_services**: *[ServiceContainerDictionary](../modules/_servicecontainerdictionary_.md#servicecontainerdictionary)*

Defined in src/ServiceContainer.ts:33

## Accessors

###  services

• **get services**(): *object*

Defined in src/ServiceContainer.ts:86

Return the service inner container.
You should use this only for test purposes.

**Returns:** *object*

* \[ **key**: *string*\]: any

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

Defined in src/ServiceContainer.ts:43

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

Defined in src/ServiceContainer.ts:57

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

Defined in src/ServiceContainer.ts:97

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

Defined in src/ServiceContainer.ts:74

Return the service matching the passed key.

**`throws`** ServiceNotFoundError

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *T*
