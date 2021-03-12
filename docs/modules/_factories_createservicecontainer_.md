[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["factories/createServiceContainer"](_factories_createservicecontainer_.md)

# External module: "factories/createServiceContainer"

## Index

### Functions

* [createServiceContainer](_factories_createservicecontainer_.md#createservicecontainer)

## Functions

###  createServiceContainer

▸ **createServiceContainer**(`config`: [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)): *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*

*Defined in [src/factories/createServiceContainer.ts:20](https://github.com/botflux/dependency-injection-container/blob/f4a99c3/src/factories/createServiceContainer.ts#L20)*

Creates IServiceContainer instances. This function is an alias to service container factory's create method.

```typescript
const container = createServiceContainer()
// ===
const container = new ServiceContainerFactory().create()

const container = createServiceContainer({ useReflection: true })
// ===
const container = new ServiceContainerFactory({ useReflection: true }).create()
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`config` | [IServiceContainerFactoryOptions](../interfaces/_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md) |  defaultOptions |   |

**Returns:** *[IServiceContainer](../interfaces/_iservicecontainer_.iservicecontainer.md)*
