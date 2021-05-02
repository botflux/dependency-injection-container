export interface ContainerInterface {
    get<T>(key: ServiceKey): T

    getAsync<T>(key: ServiceKey): Promise<T>

    has(key: ServiceKey): boolean

    hasAsync(key: ServiceKey): boolean
}

export type ServiceKey = string | Symbol | number
export type ServiceFactory<TService> = (container: ServiceProviderInterface) => TService
export type ServiceConstructor<TService> = { new(...args: any[]): TService }

export interface ContainerBuilderInterface {
    addFactory<TService>(key: ServiceKey, factory: ServiceFactory<TService>, lifeCycle: LifeCycle): this

    addConstructor<TConstructor>(key: ServiceKey, constructor: ServiceConstructor<TConstructor>, lifeCycle: LifeCycle): this

    addFactoryAsync<TService>(key: ServiceKey, factory: ServiceFactory<Promise<TService>>, lifeCycle: LifeCycle): this

    build(): ContainerInterface
}

export interface ServiceProviderInterface {
    get<T>(key: ServiceKey): T

    getAsync<T>(key: ServiceKey): Promise<T>

    has(key: ServiceKey): boolean

    hasAsync(key: ServiceKey): boolean
}

export enum LifeCycle {
    Transient,
    Singleton,
}
