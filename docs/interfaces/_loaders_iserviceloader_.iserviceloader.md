[@botflx/dependency-injection-container - v1.5.0](../README.md) › [Globals](../globals.md) › ["loaders/IServiceLoader"](../modules/_loaders_iserviceloader_.md) › [IServiceLoader](_loaders_iserviceloader_.iserviceloader.md)

# Interface: IServiceLoader

Import a group of service in a service container.

## Hierarchy

* **IServiceLoader**

## Implemented by

* [ReflectServiceLoader](../classes/_loaders_reflectserviceloader_.reflectserviceloader.md)
* [ServiceLoader](../classes/_loaders_serviceloader_.serviceloader.md)

## Index

### Methods

* [load](_loaders_iserviceloader_.iserviceloader.md#load)

## Methods

###  load

▸ **load**(`container`: [IServiceContainer](_iservicecontainer_.iservicecontainer.md)): *void*

*Defined in [src/loaders/IServiceLoader.ts:13](https://github.com/botflux/dependency-injection-container/blob/f4a99c3/src/loaders/IServiceLoader.ts#L13)*

Imports services in the given container.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`container` | [IServiceContainer](_iservicecontainer_.iservicecontainer.md) |   |

**Returns:** *void*
