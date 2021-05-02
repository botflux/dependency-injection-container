import {
    ContainerBuilderInterface,
    ContainerInterface,
    LifeCycle,
    ServiceConstructor,
    ServiceFactory,
    ServiceKey,
    ServiceProviderInterface
} from './Interfaces'

type ResolvedServicesMap = Map<ServiceKey, unknown>
type SyncFactoriesMap = Map<ServiceKey, Service<unknown>>
type AsyncFactoriesMap = Map<ServiceKey, Service<Promise<unknown>>>

abstract class SubContainer {
    constructor(protected readonly factoriesMap: Map<ServiceKey, ServiceFactory<unknown>>) {}

    abstract getFactory<TService> (serviceKey: ServiceKey): ServiceFactory<TService>;

    has = (serviceKey: ServiceKey) => this.factoriesMap.has(serviceKey)
}

class TransientSubContainer extends SubContainer {
    getFactory<TService>(serviceKey: ServiceKey): ServiceFactory<TService> {
        const factory = this.factoriesMap.get(serviceKey)

        if (!factory)
            throw new Error("No service found")

        return factory as ServiceFactory<TService>
    }
}

class SingletonSubContainer extends SubContainer {
    private readonly resolvedSingletons: ResolvedServicesMap =
        new Map<ServiceKey, unknown>()

    wrapFactory (key: ServiceKey, factory: ServiceFactory<unknown>): ServiceFactory<unknown> {
        return container => {
            if (!this.resolvedSingletons.has(key)) {
                this.resolvedSingletons.set(key, factory(container))
            }

            return this.resolvedSingletons.get(key)
        }
    }

    getFactory<TService>(serviceKey: ServiceKey): ServiceFactory<TService> {
        const factory = this.factoriesMap.get(serviceKey)

        if (!factory)
            throw new Error("No service found")

        return this.wrapFactory(serviceKey, factory) as ServiceFactory<TService>
    }
}

class SyncServiceProvider implements ServiceProviderInterface {
    constructor(private readonly innerContainer: ContainerInterface) {}

    has(key: ServiceKey): boolean {
        return this.innerContainer.has(key)
    }

    hasAsync(key: ServiceKey): boolean {
        return this.innerContainer.hasAsync(key)
    }

    get<T>(key: ServiceKey): T {
        return this.innerContainer.get(key)
    }

    getAsync<T>(key: ServiceKey): Promise<T> {
        throw new Error('Can\'t get async factories from sync factories.')
    }
}

class Container implements ContainerInterface {
    private readonly syncResolver: Map<LifeCycle, (key: ServiceKey, factory: ServiceFactory<unknown>) => unknown> =
        new Map<LifeCycle, (key: ServiceKey, factory: ServiceFactory<unknown>) => unknown>()
            .set(LifeCycle.Singleton, this.resolveSingleton.bind(this))
            .set(LifeCycle.Transient, this.resolveTransient.bind(this))

    private readonly asyncResolver: Map<LifeCycle, (key: ServiceKey, factory: ServiceFactory<Promise<unknown>>) => unknown> =
        new Map<LifeCycle, (key: ServiceKey, factory: ServiceFactory<Promise<unknown>>) => unknown>()
            .set(LifeCycle.Singleton, this.resolveAsyncSingleton.bind(this))
            .set(LifeCycle.Transient, this.resolveAsyncTransient.bind(this))

    private readonly resolvedSingletons: ResolvedServicesMap =
        new Map<ServiceKey, unknown>()

    constructor(
        private readonly syncFactories: SyncFactoriesMap,
        private readonly asyncFactories: AsyncFactoriesMap,
    ) {
    }

    get<T>(key: ServiceKey): T {
        const serviceFactory = this.syncFactories.get(key)

        if (!serviceFactory)
            throw new Error('No service found')

        const {factory, lifeCycle} = serviceFactory

        // @ts-ignore
        return this.syncResolver.get(lifeCycle)(key, factory)
    }

    async getAsync<T>(key: ServiceKey): Promise<T> {
        const serviceFactory = this.asyncFactories.get(key)

        if (!serviceFactory)
            throw new Error('No service found')

        const {factory, lifeCycle} = serviceFactory

        // @ts-ignore
        return this.asyncResolver.get(lifeCycle)(key, factory)
    }

    private resolveSingleton<TService>(key: ServiceKey): TService {
        const { factory } = this.getFactory(key)

        if (!this.resolvedSingletons.has(key)) {
            const resolvedService = factory(new SyncServiceProvider(this))
            this.resolvedSingletons.set(key, resolvedService)
        }

        return this.resolvedSingletons.get(key) as TService
    }

    private async resolveAsyncSingleton<TService>(key: ServiceKey, factory: ServiceFactory<Promise<unknown>>): Promise<TService> {
        if (!this.resolvedSingletons.has(key)) {
            const resolvedService = await factory(this)
            this.resolvedSingletons.set(key, resolvedService)
        }

        return this.resolvedSingletons.get(key) as TService
    }

    private resolveTransient<TService>(key: ServiceKey, factory: ServiceFactory<unknown>): TService {
        return factory(new SyncServiceProvider(this)) as TService
    }

    private resolveAsyncTransient<TService>(key: ServiceKey, factory: ServiceFactory<Promise<unknown>>): Promise<TService> {
        return factory(this) as Promise<TService>
    }

    has(key: ServiceKey): boolean {
        return this.syncFactories.has(key)
    }

    hasAsync(key: ServiceKey): boolean {
        return this.asyncFactories.has(key)
    }

    private getAsyncFactory (key: ServiceKey): Service<Promise<unknown>> {
        const serviceFactory = this.asyncFactories.get(key)

        if (!serviceFactory) {
            throw new Error('No service found')
        }

        return serviceFactory
    }

    private getFactory(key: ServiceKey): Service<unknown> {
        const serviceFactory = this.syncFactories.get(key)

        if (!serviceFactory)
            throw new Error('No service found')

        return serviceFactory
    }
}

class ScopedContainer implements ContainerInterface {
    constructor(
        private readonly parentContainer: ContainerInterface,
        private readonly innerContainer: ContainerInterface
    ) {}

    get<T>(key: ServiceKey): T {
        if (this.parentContainer.has(key)) {
            return this.parentContainer.get(key)
        }

        return this.innerContainer.get(key)
    }

    getAsync<T>(key: ServiceKey): Promise<T> {
        if (this.parentContainer.hasAsync(key)) {
            return this.parentContainer.getAsync(key)
        }

        return this.innerContainer.getAsync(key)
    }

    has(key: ServiceKey): boolean {
        return this.parentContainer.has(key) || this.innerContainer.has(key)
    }

    hasAsync(key: ServiceKey): boolean {
        return this.parentContainer.hasAsync(key) || this.innerContainer.hasAsync(key)
    }
}

type Service<TService> = { factory: ServiceFactory<TService>, lifeCycle: LifeCycle }

class ContainerBuilder implements ContainerBuilderInterface {
    private readonly syncFactories: SyncFactoriesMap =
        new Map<ServiceKey, Service<unknown>>()

    private readonly asyncFactories: AsyncFactoriesMap =
        new Map<ServiceKey, Service<Promise<unknown>>>()

    addFactory<TService>(key: ServiceKey, factory: ServiceFactory<TService>, lifeCycle: LifeCycle): this {
        if (this.asyncFactories.has(key) || this.syncFactories.has(key))
            throw new Error(`The service named "${key}" was already added.`)

        this.syncFactories.set(key, {factory, lifeCycle})
        return this
    }

    build(): ContainerInterface {
        return new Container(this.syncFactories, this.asyncFactories)
    }

    addConstructor<TConstructor>(key: ServiceKey, constructor: ServiceConstructor<TConstructor>, lifeCycle: LifeCycle): this {
        this.syncFactories.set(key, {factory: container => new constructor(container), lifeCycle})
        return this
    }

    addFactoryAsync<TService>(key: ServiceKey, factory: ServiceFactory<Promise<TService>>, lifeCycle: LifeCycle): this {
        if (this.asyncFactories.has(key) || this.syncFactories.has(key))
            throw new Error(`The service named "${key}" was already added.`)

        this.asyncFactories.set(key, {factory, lifeCycle})
        return this
    }
}

class ScopedContainerBuilder implements ContainerBuilderInterface {
    private readonly builder: ContainerBuilderInterface = new ContainerBuilder()

    constructor(private readonly innerContainer: ContainerInterface) {}

    addConstructor<TConstructor>(key: ServiceKey, constructor: ServiceConstructor<TConstructor>, lifeCycle: LifeCycle): this {
        this.builder.addConstructor(key, constructor, lifeCycle)
        return this;
    }

    addFactory<TService>(key: ServiceKey, factory: ServiceFactory<TService>, lifeCycle: LifeCycle): this {
        this.builder.addFactory(key, factory, lifeCycle)
        return this
    }

    addFactoryAsync<TService>(key: ServiceKey, factory: ServiceFactory<Promise<TService>>, lifeCycle: LifeCycle): this {
        this.builder.addFactoryAsync(key, factory, lifeCycle)
        return this
    }

    build(): ContainerInterface {
        return new ScopedContainer(this.innerContainer, this.builder.build());
    }

}

export const createContainerBuilder = () => new ContainerBuilder()
export const createScopedContainerBuilder = (container: ContainerInterface) => new ScopedContainerBuilder(container)
