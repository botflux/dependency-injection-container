[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["factories/IServiceContainerFactoryOptions"](../modules/_factories_iservicecontainerfactoryoptions_.md) › [IServiceContainerFactoryOptions](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)

# Interface: IServiceContainerFactoryOptions

## Hierarchy

* **IServiceContainerFactoryOptions**

## Index

### Properties

* [allowServiceOverride](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md#optional-allowserviceoverride)
* [serviceLoader](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md#optional-serviceloader)
* [useReflection](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md#usereflection)

## Properties

### `Optional` allowServiceOverride

• **allowServiceOverride**? : *undefined | false | true*

*Defined in [src/factories/IServiceContainerFactoryOptions.ts:18](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/factories/IServiceContainerFactoryOptions.ts#L18)*

If true an IServiceContainer will allow you to call
`container.add()` multiple times with the same service name.

___

### `Optional` serviceLoader

• **serviceLoader**? : *[IServiceLoader](_loaders_iserviceloader_.iserviceloader.md)*

*Defined in [src/factories/IServiceContainerFactoryOptions.ts:24](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/factories/IServiceContainerFactoryOptions.ts#L24)*

Specify service you want to load by default.
If you are using Reflection you can add new service with `@Service` and `createReflectServiceLoader`

___

###  useReflection

• **useReflection**: *boolean*

*Defined in [src/factories/IServiceContainerFactoryOptions.ts:12](https://github.com/botflux/dependency-injection-container/blob/be695a3/src/factories/IServiceContainerFactoryOptions.ts#L12)*

If true the ServiceContainerFactory will returns a service container
handling metadata and decorators; otherwise it will returns a plain
service container.
