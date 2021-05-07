[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](../modules/_implementation_serviceprovider_.md) › [SyncServiceProvider](_implementation_serviceprovider_.syncserviceprovider.md)

# Class: SyncServiceProvider

## Hierarchy

* **SyncServiceProvider**

## Implements

* [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)

## Index

### Constructors

* [constructor](_implementation_serviceprovider_.syncserviceprovider.md#constructor)

### Properties

* [innerContainer](_implementation_serviceprovider_.syncserviceprovider.md#private-innercontainer)

### Methods

* [get](_implementation_serviceprovider_.syncserviceprovider.md#get)
* [has](_implementation_serviceprovider_.syncserviceprovider.md#has)

## Constructors

###  constructor

\+ **new SyncServiceProvider**(`innerContainer`: [ContainerInterface](../interfaces/_interfaces_.containerinterface.md)): *[SyncServiceProvider](_implementation_serviceprovider_.syncserviceprovider.md)*

*Defined in [src/Implementation/ServiceProvider.ts:8](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`innerContainer` | [ContainerInterface](../interfaces/_interfaces_.containerinterface.md) |

**Returns:** *[SyncServiceProvider](_implementation_serviceprovider_.syncserviceprovider.md)*

## Properties

### `Private` innerContainer

• **innerContainer**: *[ContainerInterface](../interfaces/_interfaces_.containerinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:9](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L9)*

## Methods

###  get

▸ **get**<**T**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *T*

*Implementation of [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:14](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *T*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:11](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
