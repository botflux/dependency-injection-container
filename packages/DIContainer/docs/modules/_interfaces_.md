[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Interfaces"](_interfaces_.md)

# External module: "Interfaces"

## Index

### Enumerations

* [LifeCycle](../enums/_interfaces_.lifecycle.md)

### Classes

* [ServiceAlreadyRegisteredError](../classes/_interfaces_.servicealreadyregisterederror.md)
* [ServiceNotFoundError](../classes/_interfaces_.servicenotfounderror.md)

### Interfaces

* [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)
* [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)
* [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)
* [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)

### Type aliases

* [AsyncServiceFactory](_interfaces_.md#asyncservicefactory)
* [ServiceConstructor](_interfaces_.md#serviceconstructor)
* [ServiceFactory](_interfaces_.md#servicefactory)
* [ServiceKey](_interfaces_.md#servicekey)
* [ServiceLoaderInterface](_interfaces_.md#serviceloaderinterface)
* [SyncServiceFactory](_interfaces_.md#syncservicefactory)

## Type aliases

###  AsyncServiceFactory

Ƭ **AsyncServiceFactory**: *function*

*Defined in [src/Interfaces.ts:11](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L11)*

#### Type declaration:

▸ (`provider`: [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md)): *TService*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [AsyncServiceProviderInterface](../interfaces/_interfaces_.asyncserviceproviderinterface.md) |

___

###  ServiceConstructor

Ƭ **ServiceConstructor**: *object*

*Defined in [src/Interfaces.ts:13](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L13)*

#### Type declaration:

* **new __type**(...`args`: any[]): *TService*

___

###  ServiceFactory

Ƭ **ServiceFactory**: *[AsyncServiceFactory](_interfaces_.md#asyncservicefactory)‹TService› | [SyncServiceFactory](_interfaces_.md#syncservicefactory)‹TService›*

*Defined in [src/Interfaces.ts:12](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L12)*

___

###  ServiceKey

Ƭ **ServiceKey**: *string | Symbol | number*

*Defined in [src/Interfaces.ts:9](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L9)*

___

###  ServiceLoaderInterface

Ƭ **ServiceLoaderInterface**: *function*

*Defined in [src/Interfaces.ts:50](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L50)*

#### Type declaration:

▸ (`containerBuilder`: [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`containerBuilder` | [ContainerBuilderInterface](../interfaces/_interfaces_.containerbuilderinterface.md) |

___

###  SyncServiceFactory

Ƭ **SyncServiceFactory**: *function*

*Defined in [src/Interfaces.ts:10](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Interfaces.ts#L10)*

#### Type declaration:

▸ (`provider`: [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)): *TService*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md) |
