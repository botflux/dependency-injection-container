[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["factories/createReflectServiceLoader"](_factories_createreflectserviceloader_.md)

# External module: "factories/createReflectServiceLoader"

## Index

### Functions

* [createReflectServiceLoader](_factories_createreflectserviceloader_.md#createreflectserviceloader)

## Functions

###  createReflectServiceLoader

▸ **createReflectServiceLoader**(`serviceConstructors`: [Constructor](_types_.md#constructor)[], `serviceFactories`: [ImportService](_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]): *[IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*

*Defined in [src/factories/createReflectServiceLoader.ts:14](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/factories/createReflectServiceLoader.ts#L14)*

Create a reflect service loader.
This loader allow shorter service declaration by passing collections of services.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serviceConstructors` | [Constructor](_types_.md#constructor)[] | - |
`serviceFactories` | [ImportService](_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[] |   |

**Returns:** *[IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*
