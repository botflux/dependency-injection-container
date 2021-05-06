[@botflx/dependency-injection-container - v2.0.0](../README.md) › [Globals](../globals.md) › ["Implementation/ServiceLoader"](_implementation_serviceloader_.md)

# External module: "Implementation/ServiceLoader"

## Index

### Type aliases

* [Constructor](_implementation_serviceloader_.md#constructor)

### Functions

* [Inject](_implementation_serviceloader_.md#const-inject)
* [Service](_implementation_serviceloader_.md#const-service)
* [reflectServiceLoader](_implementation_serviceloader_.md#const-reflectserviceloader)

## Type aliases

###  Constructor

Ƭ **Constructor**: *object*

*Defined in [src/Implementation/ServiceLoader.ts:15](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceLoader.ts#L15)*

#### Type declaration:

* **new __type**(...`args`: any[]): *T*

## Functions

### `Const` Inject

▸ **Inject**(`serviceKey`: [ServiceKey](_interfaces_.md#servicekey)): *ParameterDecorator*

*Defined in [src/Implementation/ServiceLoader.ts:7](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceLoader.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](_interfaces_.md#servicekey) |

**Returns:** *ParameterDecorator*

___

### `Const` Service

▸ **Service**(`serviceKey`: [ServiceKey](_interfaces_.md#servicekey), `lifeCycle`: [LifeCycle](../enums/_interfaces_.lifecycle.md)): *ClassDecorator*

*Defined in [src/Implementation/ServiceLoader.ts:3](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceLoader.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceKey` | [ServiceKey](_interfaces_.md#servicekey) |
`lifeCycle` | [LifeCycle](../enums/_interfaces_.lifecycle.md) |

**Returns:** *ClassDecorator*

___

### `Const` reflectServiceLoader

▸ **reflectServiceLoader**(`services`: [Constructor](_implementation_serviceloader_.md#constructor)‹unknown›[]): *(Anonymous function)*

*Defined in [src/Implementation/ServiceLoader.ts:17](https://github.com/botflux/dependency-injection-container/blob/bd86576/packages/DIContainer/src/Implementation/ServiceLoader.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`services` | [Constructor](_implementation_serviceloader_.md#constructor)‹unknown›[] |

**Returns:** *(Anonymous function)*
