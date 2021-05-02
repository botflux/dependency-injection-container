import {ServiceFactory, ServiceKey} from '../Interfaces'

export abstract class FactoryRegistry {
    constructor(protected readonly factoriesMap: Map<ServiceKey, ServiceFactory<unknown>>) {
    }

    abstract getFactory<TService>(serviceKey: ServiceKey): ServiceFactory<TService> | undefined;

    has = (serviceKey: ServiceKey) => this.factoriesMap.has(serviceKey)
}

class TransientFactoryRegistry extends FactoryRegistry {
    getFactory<TService>(serviceKey: ServiceKey): ServiceFactory<TService> | undefined {
        const factory = this.factoriesMap.get(serviceKey)

        if (!factory)
            return undefined

        return factory as ServiceFactory<TService>
    }
}

type ResolvedServicesMap = Map<ServiceKey, unknown>

class SingletonFactoryRegistry extends FactoryRegistry {
    private readonly resolvedSingletons: ResolvedServicesMap =
        new Map<ServiceKey, unknown>()

    wrapFactory(key: ServiceKey, factory: ServiceFactory<unknown>): ServiceFactory<unknown> {
        return container => {
            if (!this.resolvedSingletons.has(key)) {
                this.resolvedSingletons.set(key, factory(container))
            }

            return this.resolvedSingletons.get(key)
        }
    }

    getFactory<TService>(serviceKey: ServiceKey): ServiceFactory<TService> | undefined {
        const factory = this.factoriesMap.get(serviceKey)

        if (!factory)
            return undefined

        return this.wrapFactory(serviceKey, factory) as ServiceFactory<TService>
    }
}

export const createSingletonFactoryRegistry = (factoriesMap: Map<ServiceKey, ServiceFactory<unknown>>) =>
    new SingletonFactoryRegistry(factoriesMap)

export const createTransientFactoryRegistry = (factoriesMap: Map<ServiceKey, ServiceFactory<unknown>>) =>
    new TransientFactoryRegistry(factoriesMap)
