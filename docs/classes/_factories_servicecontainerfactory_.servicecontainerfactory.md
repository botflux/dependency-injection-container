[@botflx/dependency-injection-container - v1.4.0](../README.md) › [Globals](../globals.md) › ["factories/ServiceContainerFactory"](../modules/_factories_servicecontainerfactory_.md) › [ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)

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

* [_optionMapper](_factories_servicecontainerfactory_.servicecontainerfactory.md#private-_optionmapper)
* [_options](_factories_servicecontainerfactory_.servicecontainerfactory.md#private-_options)

### Methods

* [create](_factories_servicecontainerfactory_.servicecontainerfactory.md#create)

## Constructors

###  constructor

\+ **new ServiceContainerFactory**(`options`: [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md), `optionMapper`: [IOptionMapper](../interfaces/_mappers_ioptionmapper_.ioptionmapper.md)): *[ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:29](https://github.com/botflux/dependency-injection-container/blob/4ec09c5/src/factories/ServiceContainerFactory.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md) |  defaultOptions |
`optionMapper` | [IOptionMapper](../interfaces/_mappers_ioptionmapper_.ioptionmapper.md) |  new OptionMapper() |

**Returns:** *[ServiceContainerFactory](_factories_servicecontainerfactory_.servicecontainerfactory.md)*

## Properties

### `Private` _optionMapper

• **_optionMapper**: *[IOptionMapper](../interfaces/_mappers_ioptionmapper_.ioptionmapper.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:29](https://github.com/botflux/dependency-injection-container/blob/4ec09c5/src/factories/ServiceContainerFactory.ts#L29)*

___

### `Private` _options

• **_options**: *[IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:28](https://github.com/botflux/dependency-injection-container/blob/4ec09c5/src/factories/ServiceContainerFactory.ts#L28)*

## Methods

###  create

▸ **create**(): *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Implementation of [IServiceContainerFactory](../interfaces/_factories_iservicecontainerfactory_.iservicecontainerfactory.md)*

*Defined in [src/factories/ServiceContainerFactory.ts:43](https://github.com/botflux/dependency-injection-container/blob/4ec09c5/src/factories/ServiceContainerFactory.ts#L43)*

Creates a new instance of IServiceContainer

```typescript
const container: IServiceContainer = new ServiceContainerFactory().create()
```

**Returns:** *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*
