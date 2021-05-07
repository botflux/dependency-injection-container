[@botflx/dependency-injection-container - v2.1.0](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceProvider"](../modules/_implementation_serviceprovider_.md) › [CombinedSyncServiceProvider](_implementation_serviceprovider_.combinedsyncserviceprovider.md)

# Class: CombinedSyncServiceProvider

## Hierarchy

* **CombinedSyncServiceProvider**

## Implements

* [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)

## Index

### Constructors

* [constructor](_implementation_serviceprovider_.combinedsyncserviceprovider.md#constructor)

### Properties

* [providers](_implementation_serviceprovider_.combinedsyncserviceprovider.md#private-providers)

### Methods

* [get](_implementation_serviceprovider_.combinedsyncserviceprovider.md#get)
* [has](_implementation_serviceprovider_.combinedsyncserviceprovider.md#has)

## Constructors

###  constructor

\+ **new CombinedSyncServiceProvider**(`providers`: [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)[]): *[CombinedSyncServiceProvider](_implementation_serviceprovider_.combinedsyncserviceprovider.md)*

*Defined in [src/Implementation/ServiceProvider.ts:19](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`providers` | [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)[] |

**Returns:** *[CombinedSyncServiceProvider](_implementation_serviceprovider_.combinedsyncserviceprovider.md)*

## Properties

### `Private` providers

• **providers**: *[SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)[]*

*Defined in [src/Implementation/ServiceProvider.ts:20](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L20)*

## Methods

###  get

▸ **get**<**TService**>(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *TService*

*Implementation of [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:22](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L22)*

**Type parameters:**

▪ **TService**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *TService*

___

###  has

▸ **has**(`key`: [ServiceKey](../modules/_interfaces_.md#servicekey)): *boolean*

*Implementation of [SyncServiceProviderInterface](../interfaces/_interfaces_.syncserviceproviderinterface.md)*

*Defined in [src/Implementation/ServiceProvider.ts:32](https://github.com/botflux/dependency-injection-container/blob/e8a6c87/packages/DIContainer/src/Implementation/ServiceProvider.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [ServiceKey](../modules/_interfaces_.md#servicekey) |

**Returns:** *boolean*
