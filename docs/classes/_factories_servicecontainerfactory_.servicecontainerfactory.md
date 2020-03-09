[@botflx/dependency-injection-container - v1.2.8](../README.md) › [Globals](../globals.md) › ["factories/ServiceContainerFactory"](../modules/_factories_servicecontainerfactory_.md) › [ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)

# Class: ServiceContainerFactory

Creates IServiceContainer instances.

```typescript
new ServiceContainerFactory()
new ServiceContainerFactory({
    useReflection: true
})
```

## Hierarchy

* **ServiceContainerFactory**

## Implements

* [IServiceContainerFactory](../interfaces/_factories_iservicecontainerfactory_.iservicecontainerfactory.md)

## Index

### Constructors

* [constructor](_factories_servicecontainerfactory_.servicecontainerfactory.md#constructor)

### Properties

* [_options](_factories_servicecontainerfactory_.servicecontainerfactory.md#private-_options)

### Methods

* [create](_factories_servicecontainerfactory_.servicecontainerfactory.md#create)

## Constructors

###  constructor

\+ **new ServiceContainerFactory**(`options`: [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)): *[ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:25](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/factories/ServiceContainerFactory.ts#L25)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md) |  defaultOptions |

**Returns:** *[ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)*

## Properties

### `Private` _options

• **_options**: *[IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:25](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/factories/ServiceContainerFactory.ts#L25)*

## Methods

###  create

▸ **create**(): *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Implementation of [IServiceContainerFactory](../interfaces/_factories_iservicecontainerfactory_.iservicecontainerfactory.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:38](https://github.com/botflux/dependency-injection-container/blob/2de830d/src/factories/ServiceContainerFactory.ts#L38)*

Creates a new instance of IServiceContainer

```typescript
const container: IServiceContainer = new ServiceContainerFactory().create()
```

**Returns:** *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*
