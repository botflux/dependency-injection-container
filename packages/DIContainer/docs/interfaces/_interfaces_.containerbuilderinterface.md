[@botflx/dependency-injection-container - v2.0.3](../README.md) › [Globals](../globals.md) › ["Interfaces"](../modules/_interfaces_.md) › [ContainerBuilderInterface](_interfaces_.containerbuilderinterface.md)

# Interface: ContainerBuilderInterface

## Hierarchy

* **ContainerBuilderInterface**

## Implemented by

* [ContainerBuilder](../classes/_implementation_container_.containerbuilder.md)
* [ScopedContainerBuilder](../classes/_implementation_scopedcontainer_.scopedcontainerbuilder.md)

## Index

### Methods

* [addAsyncFactory](_interfaces_.containerbuilderinterface.md#addasyncfactory)
* [addConstructor](_interfaces_.containerbuilderinterface.md#addconstructor)
* [addFactory](_interfaces_.containerbuilderinterface.md#addfactory)
* [build](_interfaces_.containerbuilderinterface.md#build)

## Methods

###  addAsyncFactory

▸ **addAsyncFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService››, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Defined in [src/Interfaces.ts:18](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L18)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`factory` | [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService›› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  addConstructor

▸ **addConstructor**<**TConstructor**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `constructor`: [ServiceConstructor](../modules/_interfaces_.md#serviceconstructor)‹TConstructor›, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Defined in [src/Interfaces.ts:17](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L17)*

**Type parameters:**

▪ **TConstructor**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`constructor` | [ServiceConstructor](../modules/_interfaces_.md#serviceconstructor)‹TConstructor› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  addFactory

▸ **addFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService›, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Defined in [src/Interfaces.ts:16](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L16)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |
`factory` | [SyncServiceFactory](../modules/_interfaces_.md#syncservicefactory)‹TService› |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *this*

___

###  build

▸ **build**(): *[ContainerInterface](_interfaces_.containerinterface.md)*

*Defined in [src/Interfaces.ts:20](https://github.com/botflux/dependency-injection-container/blob/f2bcefe/packages/DIContainer/src/Interfaces.ts#L20)*

**Returns:** *[ContainerInterface](_interfaces_.containerinterface.md)*
