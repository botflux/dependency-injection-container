/**
 * An example of service container "container".
 */
export type ServiceContainerDictionary = { [key: string]: any }

/**
 * Describe a class constructor.
 */
export type Constructor = { new(...args: any[]): any }

/**
 * Represents an item of ServiceLoader / ReflectServiceLoader
 * *T* is always Constructor or IServiceFactoryFunction
 *
 * ```typescript
 * import { Constructor, ImportService, IServiceFactoryFunction } from '@botflx/dependency-injection-container'
 *
 * class MyService {}
 * class AnotherService {}
 *
 * const myServiceImport: ImportService<Constructor> = { name: 'myService', service: MyService }
 * const anotherServiceImport: ImportService<Constructor> = { name: 'anotherService', service: MyService }
 *
 * const myServiceFactoryImport: ImportService<IServiceFactoryFunction> = { name: 'myService', service: container => new MyService(container) }
 * const anotherServiceFactoryImport: ImportService<IServiceFactoryFunction> = { name: 'anotherService', service: container => new MyService(container) }
 * ```
 */
export type ImportService<T> = { name: string, service: T }
