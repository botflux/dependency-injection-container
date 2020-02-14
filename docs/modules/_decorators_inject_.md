[@botflx/dependency-injection-container - v1.2.3](../README.md) › [Globals](../globals.md) › ["decorators/Inject"](_decorators_inject_.md)

# External module: "decorators/Inject"

## Index

### Functions

* [Inject](_decorators_inject_.md#inject)

## Functions

###  Inject

▸ **Inject**(`serviceName`: string): *(Anonymous function)*

*Defined in [src/decorators/Inject.ts:22](https://github.com/botflux/dependency-injection-container/blob/ace7f76/src/decorators/Inject.ts#L22)*

Adds metadata to the decorated parameter.
A IServiceContainer handling reflection will be able to use those metadata.

```typescript
class Logger {
    constructor(@Inject('message') message: string) {}
}

const container = new ServiceContainerFactory({ useReflection: true })
     .create()
     .addFactory('message', () => 'hello world')
     .add('logger', Logger)
```

**`constructor`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serviceName` | string |   |

**Returns:** *(Anonymous function)*
