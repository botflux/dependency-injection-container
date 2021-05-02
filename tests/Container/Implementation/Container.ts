import {
    ContainerBuilderInterface,
    ContainerInterface,
    LifeCycle,
    ServiceConstructor,
    SyncServiceFactory,
    ServiceKey, AsyncServiceFactory, ServiceFactory,
} from '../Interfaces'
import {
    createSingletonFactoryRegistry,
    createTransientFactoryRegistry,
    FactoryRegistry
} from './FactoryRegistry'
import {createAsyncServiceProvider, createSyncServiceProvider} from './ServiceProvider'

class Container implements ContainerInterface {

    private readonly syncFactoriesRegistry =
        new Map<LifeCycle, FactoryRegistry>()

    private readonly asyncFactoriesRegistry =
        new Map<LifeCycle, FactoryRegistry>()

    constructor(
        syncSingletonFactories: Map<ServiceKey, SyncServiceFactory<unknown>>,
        syncTransientFactories: Map<ServiceKey, SyncServiceFactory<unknown>>,
        asyncSingletonFactories: Map<ServiceKey, SyncServiceFactory<Promise<unknown>>>,
        asyncTransientFactories: Map<ServiceKey, SyncServiceFactory<Promise<unknown>>>
    ) {
        this.syncFactoriesRegistry.set(LifeCycle.Singleton, createSingletonFactoryRegistry(syncSingletonFactories))
        this.syncFactoriesRegistry.set(LifeCycle.Transient, createTransientFactoryRegistry(syncTransientFactories))
        this.asyncFactoriesRegistry.set(LifeCycle.Singleton, createSingletonFactoryRegistry(asyncSingletonFactories))
        this.asyncFactoriesRegistry.set(LifeCycle.Transient, createTransientFactoryRegistry(asyncTransientFactories))
    }

    get<T>(key: ServiceKey): T {
        const serviceFactory = this.syncFactoriesRegistry.get(LifeCycle.Singleton)?.getFactory(key)
            || this.syncFactoriesRegistry.get(LifeCycle.Transient)?.getFactory(key)

        if (!serviceFactory)
            throw new Error('No service found')

        // @ts-ignore
        return serviceFactory(createSyncServiceProvider(this))
    }

    async getAsync<T>(key: ServiceKey): Promise<T> {
        const serviceFactory = this.asyncFactoriesRegistry.get(LifeCycle.Singleton)?.getFactory(key)
            || this.asyncFactoriesRegistry.get(LifeCycle.Transient)?.getFactory(key)

        if (!serviceFactory)
            throw new Error('No service found')

        // @ts-ignore
        return serviceFactory(createAsyncServiceProvider(this))
    }

    has(key: ServiceKey): boolean {
        return this.syncFactoriesRegistry.get(LifeCycle.Singleton)?.has(key)
            || this.syncFactoriesRegistry.get(LifeCycle.Transient)?.has(key)
            || false
    }

    hasAsync(key: ServiceKey): boolean {
        return this.asyncFactoriesRegistry.get(LifeCycle.Singleton)?.has(key)
            || this.asyncFactoriesRegistry.get(LifeCycle.Transient)?.has(key)
            || false
    }
}

class ContainerBuilder implements ContainerBuilderInterface {
    private readonly syncFactories =
        new Map<LifeCycle, Map<ServiceKey, SyncServiceFactory<unknown>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

    private readonly asyncFactories =
        new Map<LifeCycle, Map<ServiceKey, AsyncServiceFactory<Promise<unknown>>>>()
            .set(LifeCycle.Singleton, new Map())
            .set(LifeCycle.Transient, new Map())

    addFactory<TService>(key: ServiceKey, factory: SyncServiceFactory<TService>, lifeCycle: LifeCycle): this {
        if (this.isAlreadyRegistered(key))
            throw new Error(`The service named "${key}" was already added.`)


        this.syncFactories.get(lifeCycle)?.set(key, factory)
        // this.syncFactories.set(key, {factory, lifeCycle})
        return this
    }

    build(): ContainerInterface {
        return new Container(
            this.syncFactories.get(LifeCycle.Singleton) || new Map(),
            this.syncFactories.get(LifeCycle.Transient) || new Map(),
            this.asyncFactories.get(LifeCycle.Singleton) || new Map(),
            this.asyncFactories.get(LifeCycle.Transient) || new Map()
        )
    }

    addConstructor<TConstructor>(key: ServiceKey, constructor: ServiceConstructor<TConstructor>, lifeCycle: LifeCycle): this {
        this.syncFactories.get(lifeCycle)?.set(key, container => new constructor(container))
        return this
    }

    addAsyncFactory<TService>(key: ServiceKey, factory: AsyncServiceFactory<Promise<TService>>, lifeCycle: LifeCycle): this {
        if (this.isAlreadyRegistered(key))
            throw new Error(`The service named "${key}" was already added.`)

        this.asyncFactories.get(lifeCycle)?.set(key, factory)
        return this
    }

    isAlreadyRegistered(key: ServiceKey): boolean {
        return this.asyncFactories.get(LifeCycle.Transient)?.has(key)
            || this.asyncFactories.get(LifeCycle.Singleton)?.has(key)
            || this.syncFactories.get(LifeCycle.Transient)?.has(key)
            || this.syncFactories.get(LifeCycle.Singleton)?.has(key)
            || false
    }
}

export const createContainerBuilder = () => new ContainerBuilder()
