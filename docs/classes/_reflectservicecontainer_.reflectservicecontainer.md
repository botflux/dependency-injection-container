[@botflx/dependency-injection-container - v1.6.0](../README.md) › [Globals](../globals.md) › ["ReflectServiceContainer"](../modules/_reflectservicecontainer_.md) › [ReflectServiceContainer](_reflectservicecontainer_.reflectservicecontainer.md)

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

### Constructors

* [constructor](_reflectservicecontainer_.reflectservicecontainer.md#constructor)

### Properties

* [_options](_reflectservicecontainer_.reflectservicecontainer.md#private-_options)
* [_serviceFactories](_reflectservicecontainer_.reflectservicecontainer.md#private-_servicefactories)
* [_services](_reflectservicecontainer_.reflectservicecontainer.md#private-_services)

### Accessors

* [factories](_reflectservicecontainer_.reflectservicecontainer.md#factories)
* [services](_reflectservicecontainer_.reflectservicecontainer.md#services)

### Methods

* [add](_reflectservicecontainer_.reflectservicecontainer.md#add)
* [addFactory](_reflectservicecontainer_.reflectservicecontainer.md#addfactory)
* [delete](_reflectservicecontainer_.reflectservicecontainer.md#delete)
* [get](_reflectservicecontainer_.reflectservicecontainer.md#get)
* [resolve](_reflectservicecontainer_.reflectservicecontainer.md#resolve)
* [resolveFactory](_reflectservicecontainer_.reflectservicecontainer.md#resolvefactory)

## Constructors

###  constructor

\+ **new ReflectServiceContainer**(`containerOptions`: [IServiceContainerOptions](../interfaces/_iservicecontaineroptions_.iservicecontaineroptions.md)): *[ReflectServiceContainer](_reflectservicecontainer_.reflectservicecontainer.md)*

*Defined in [src/ReflectServiceContainer.ts:52](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`containerOptions` | [IServiceContainerOptions](../interfaces/_iservicecontaineroptions_.iservicecontaineroptions.md) |  defaultReflectServiceContainerOptions |

**Returns:** *[ReflectServiceContainer](_reflectservicecontainer_.reflectservicecontainer.md)*

## Properties

### `Private` _options

• **_options**: *[IServiceContainerOptions](../interfaces/_iservicecontaineroptions_.iservicecontaineroptions.md)*

*Defined in [src/ReflectServiceContainer.ts:50](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L50)*

___

### `Private` _serviceFactories

• **_serviceFactories**: *object*

*Defined in [src/ReflectServiceContainer.ts:52](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L52)*

#### Type declaration:

* \[ **key**: *string*\]: [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)

___

### `Private` _services

• **_services**: *[ServiceContainerDictionary](../modules/_types_.md#servicecontainerdictionary)*

*Defined in [src/ReflectServiceContainer.ts:48](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L48)*

Holds services instances

## Accessors

###  factories

• **get factories**(): *object*

*Defined in [src/ReflectServiceContainer.ts:150](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L150)*

This getter must only be used for tests purposes.

**Returns:** *object*

* \[ **key**: *string*\]: [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)

___

###  services

• **get services**(): *object*

*Defined in [src/ReflectServiceContainer.ts:143](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L143)*

This getter must only be used for tests purposes.

**Returns:** *object*

* \[ **key**: *string*\]: any

## Methods

###  add

▸ **add**(`key`: string, `constructor`: object): *this*

*Defined in [src/ReflectServiceContainer.ts:66](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L66)*

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

*Defined in [src/ReflectServiceContainer.ts:86](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L86)*

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

*Defined in [src/ReflectServiceContainer.ts:129](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L129)*

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

*Defined in [src/ReflectServiceContainer.ts:110](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L110)*

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

*Defined in [src/ReflectServiceContainer.ts:160](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L160)*

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

*Defined in [src/ReflectServiceContainer.ts:176](https://github.com/botflux/dependency-injection-container/blob/9e6a0ea/src/ReflectServiceContainer.ts#L176)*

Resolve a factory function.
It will have the same effect as `addFactory` ut without registering the instance in the container.

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md) |   |

**Returns:** *TService*
