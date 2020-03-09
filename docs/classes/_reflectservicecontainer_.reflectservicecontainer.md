[@botflx/dependency-injection-container - v1.2.8](../README.md) › [Globals](../globals.md) › ["ReflectServiceContainer"](../modules/_reflectservicecontainer_.md) › [ReflectServiceContainer](_reflectservicecontainer_.reflectservicecontainer.md)

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

```typescript
const container: IServiceContainer = createServiceContainer()
     .addFactory('connectionString', () => 'mysql://localhost:3306/myDb?user=root&password=root')

class Repository {
    constructor(@Inject('connectionString') private connectionString: string) {}
}

const repository: Repository = container.resolve<Repository>(Repository)
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
* [resolve](_reflectservicecontainer_.reflectservicecontainer.md#resolve)
* [resolveFactory](_reflectservicecontainer_.reflectservicecontainer.md#resolvefactory)

## Properties

### `Private` _services

• **_services**: *[ServiceContainerDictionary](../modules/_servicecontainerdictionary_.md#servicecontainerdictionary)*

*Defined in [src/ReflectServiceContainer.ts:43](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L43)*

Holds services instances

## Accessors

###  services

• **get services**(): *object*

*Defined in [src/ReflectServiceContainer.ts:118](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L118)*

This getter must only be used for tests purposes.

**Returns:** *object*

* \[ **key**: *string*\]: any

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/ReflectServiceContainer.ts:53](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L53)*

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

*Defined in [src/ReflectServiceContainer.ts:73](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L73)*

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

*Defined in [src/ReflectServiceContainer.ts:105](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L105)*

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

*Defined in [src/ReflectServiceContainer.ts:90](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L90)*

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

*Defined in [src/ReflectServiceContainer.ts:128](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L128)*

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

*Defined in [src/ReflectServiceContainer.ts:144](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/ReflectServiceContainer.ts#L144)*

Resolve a factory function.
It will have the same effect as `addFactory` ut without registering the instance in the container.

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *TService*
