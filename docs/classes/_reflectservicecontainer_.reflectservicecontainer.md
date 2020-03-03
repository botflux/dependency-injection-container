[@botflx/dependency-injection-container - v1.2.6](../README.md) › [Globals](../globals.md) › ["ReflectServiceContainer"](../modules/_reflectservicecontainer_.md) › [ReflectServiceContainer](_reflectservicecontainer_.reflectservicecontainer.md)

# Class: ReflectServiceContainer

An implementation of ServiceContainer that uses Reflection.
With this implementation you are able to use the @Inject decorator.
Note: This implementation need reflection in order to work (e.g npm install reflect-metadata).

```typescript
class Logger {}
class Db {
    constructor(@Inject('logger') logger: Logger, @Inject('config') config: any) {}
}

const container = new ReflectServiceContainer()
     .addFactory('config', () => ({ dbUser: 'user', dbPass: 'pass' })
     .add('logger', Logger)
     .add('db', Db)

const logger = container.get<Logger>('logger')
const db = container.get<Db>('db')
```

## Hierarchy

* **ReflectServiceContainer**

## Implements

* [IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)

## Index

### Properties

* [_services](_reflectservicecontainer_.reflectservicecontainer.md#private-_services)

### Accessors

* [services](_reflectservicecontainer_.reflectservicecontainer.md#services)

### Methods

* [add](_reflectservicecontainer_.reflectservicecontainer.md#add)
* [addFactory](_reflectservicecontainer_.reflectservicecontainer.md#addfactory)
* [delete](_reflectservicecontainer_.reflectservicecontainer.md#delete)
* [get](_reflectservicecontainer_.reflectservicecontainer.md#get)

## Properties

### `Private` _services

• **_services**: *[ServiceContainerDictionary](../modules/_servicecontainerdictionary_.md#servicecontainerdictionary)*

*Defined in [src/ReflectServiceContainer.ts:32](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L32)*

Holds services instances

## Accessors

###  services

• **get services**(): *object*

*Defined in [src/ReflectServiceContainer.ts:107](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L107)*

This getter must only be used for tests purposes.

**Returns:** *object*

* \[ **key**: *string*\]: any

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/ReflectServiceContainer.ts:42](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L42)*

Add a new service using service's constructor

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

*Defined in [src/ReflectServiceContainer.ts:62](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L62)*

Add a new service using a service factory function

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

*Defined in [src/ReflectServiceContainer.ts:94](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L94)*

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

*Defined in [src/ReflectServiceContainer.ts:79](https://github.com/botflux/dependency-injection-container/blob/2d78c73/src/ReflectServiceContainer.ts#L79)*

Return the service matching the passed key.

**`throws`** ServiceNotFoundError

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *T*
