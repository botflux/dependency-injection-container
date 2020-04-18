[@botflx/dependency-injection-container - v1.4.0](../README.md) › [Globals](../globals.md) › ["factories/IServiceContainerFactoryOptions"](../modules/_factories_iservicecontainerfactoryoptions_.md) › [IServiceContainerFactoryOptions](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md)

# Interface: IServiceContainerFactoryOptions

Represents options of IServiceContainerFactory.

## Hierarchy

* **IServiceContainerFactoryOptions**

## Index

### Properties

* [allowServiceOverride](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md#optional-allowserviceoverride)
* [useReflection](_factories_iservicecontainerfactoryoptions_.iservicecontainerfactoryoptions.md#usereflection)

## Properties

### `Optional` allowServiceOverride

• **allowServiceOverride**? : *undefined | false | true*

*Defined in [src/factories/IServiceContainerFactoryOptions.ts:16](https://github.com/botflux/dependency-injection-container/blob/cc34105/src/factories/IServiceContainerFactoryOptions.ts#L16)*

If true an IServiceContainer will allow you to call
`container.add()` multiple times with the same service name.

___

###  useReflection

• **useReflection**: *boolean*

*Defined in [src/factories/IServiceContainerFactoryOptions.ts:10](https://github.com/botflux/dependency-injection-container/blob/cc34105/src/factories/IServiceContainerFactoryOptions.ts#L10)*

If true the ServiceContainerFactory will returns a service container
handling metadata and decorators; otherwise it will returns a plain
service container.
