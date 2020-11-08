[@botflx/dependency-injection-container - v1.4.2](../README.md) › [Globals](../globals.md) › ["factories/createPlainServiceLoader"](_factories_createplainserviceloader_.md)

# External module: "factories/createPlainServiceLoader"

## Index

### Functions

* [createPlainServiceLoader](_factories_createplainserviceloader_.md#createplainserviceloader)

## Functions

###  createPlainServiceLoader

▸ **createPlainServiceLoader**(`serviceConstructors`: [ImportService](_types_.md#importservice)‹[Constructor](_types_.md#constructor)›[], `serviceFactories`: [ImportService](_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[]): *[IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*

*Defined in [src/factories/createPlainServiceLoader.ts:13](https://github.com/botflux/dependency-injection-container/blob/4cf7f58/src/factories/createPlainServiceLoader.ts#L13)*

Create a plain service loader.
This loader allow shorter service declaration by passing collections of services.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serviceConstructors` | [ImportService](_types_.md#importservice)‹[Constructor](_types_.md#constructor)›[] | - |
`serviceFactories` | [ImportService](_types_.md#importservice)‹[IServiceFactoryFunction](../interfaces/_iservicefactoryfunction_.iservicefactoryfunction.md)›[] |   |

**Returns:** *[IServiceLoader](../interfaces/_loaders_iserviceloader_.iserviceloader.md)*
