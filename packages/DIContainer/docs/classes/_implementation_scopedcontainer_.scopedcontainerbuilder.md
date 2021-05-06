[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Implementation/ScopedContainer"](../modules/_implementation_scopedcontainer_.md) › [ScopedContainerBuilder](_implementation_scopedcontainer_.scopedcontainerbuilder.md)

# Class: ScopedContainerBuilder

## Hierarchy

* **ScopedContainerBuilder**

## Implements

* [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)

## Index

### Constructors

* [constructor](_implementation_scopedcontainer_.scopedcontainerbuilder.md#constructor)

### Properties

* [builder](_implementation_scopedcontainer_.scopedcontainerbuilder.md#private-builder)
* [innerContainer](_implementation_scopedcontainer_.scopedcontainerbuilder.md#private-innercontainer)

### Methods

* [addAsyncFactory](_implementation_scopedcontainer_.scopedcontainerbuilder.md#addasyncfactory)
* [addConstructor](_implementation_scopedcontainer_.scopedcontainerbuilder.md#addconstructor)
* [addFactory](_implementation_scopedcontainer_.scopedcontainerbuilder.md#addfactory)
* [build](_implementation_scopedcontainer_.scopedcontainerbuilder.md#build)

## Constructors

###  constructor

\+ **new ScopedContainerBuilder**(`innerContainer`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[ScopedContainerBuilder](_implementation_scopedcontainer_.scopedcontainerbuilder.md)*

*Defined in [src/Implementation/ScopedContainer.ts:44](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[ScopedContainerBuilder](_implementation_scopedcontainer_.scopedcontainerbuilder.md)*

## Properties

### `Private` builder

• **builder**: *[ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)* =  createContainerBuilder()

*Defined in [src/Implementation/ScopedContainer.ts:44](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L44)*

___

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:46](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L46)*

## Methods

###  addAsyncFactory

▸ **addAsyncFactory**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey), `factory`: [AsyncServiceFactory](../modules/_interfaces_.md#asyncservicefactory)‹Promise‹TService››, `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *this*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:59](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L59)*

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

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:49](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L49)*

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

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:54](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L54)*

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

▸ **build**(): *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Implementation of [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)*

*Defined in [src/Implementation/ScopedContainer.ts:64](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ScopedContainer.ts#L64)*

**Returns:** *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*
