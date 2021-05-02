import {
    ContainerBuilderInterface,
    ContainerInterface,
    LifeCycle,
    ServiceConstructor,
    SyncServiceFactory,
    ServiceKey
} from '../Interfaces'
import {createContainerBuilder} from './Container'

class ScopedContainer implements ContainerInterface {
    constructor(
        private readonly parentContainer: ContainerInterface,
        private readonly innerContainer: ContainerInterface
    ) {
    }

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

class ScopedContainerBuilder implements ContainerBuilderInterface {
    private readonly builder: ContainerBuilderInterface = createContainerBuilder()

    constructor(private readonly innerContainer: ContainerInterface) {
    }

    addConstructor<TConstructor>(key: ServiceKey, constructor: ServiceConstructor<TConstructor>, lifeCycle: LifeCycle): this {
        this.builder.addConstructor(key, constructor, lifeCycle)
        return this
    }

    addFactory<TService>(key: ServiceKey, factory: SyncServiceFactory<TService>, lifeCycle: LifeCycle): this {
        this.builder.addFactory(key, factory, lifeCycle)
        return this
    }

    addFactoryAsync<TService>(key: ServiceKey, factory: SyncServiceFactory<Promise<TService>>, lifeCycle: LifeCycle): this {
        this.builder.addFactoryAsync(key, factory, lifeCycle)
        return this
    }

    build(): ContainerInterface {
        return new ScopedContainer(this.innerContainer, this.builder.build())
    }

}

export const createScopedContainerBuilder = (container: ContainerInterface) => new ScopedContainerBuilder(container)
