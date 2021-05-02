import {
    AsyncServiceProviderInterface,
    ContainerInterface,
    ServiceKey,
    SyncServiceProviderInterface
} from '../Interfaces'

class SyncServiceProvider implements SyncServiceProviderInterface {
    constructor(private readonly innerContainer: ContainerInterface) {}

    has(key: ServiceKey): boolean {
        return this.innerContainer.has(key)
    }
    get<T>(key: ServiceKey): T {
        return this.innerContainer.get(key)
    }
}

class AsyncServiceProvider implements AsyncServiceProviderInterface {
    private readonly syncProvider: SyncServiceProviderInterface

    constructor(private readonly innerContainer: ContainerInterface) {
        this.syncProvider = new SyncServiceProvider(innerContainer)
    }


    get<TService>(key: ServiceKey): TService {
        return this.syncProvider.get(key);
    }

    getAsync<TService>(key: ServiceKey): Promise<TService> {
        return this.innerContainer.getAsync(key)
    }

    has(key: ServiceKey): boolean {
        return this.syncProvider.has(key)
    }

    hasAsync(key: ServiceKey): boolean {
        return this.innerContainer.hasAsync(key)
    }
}

export const createSyncServiceProvider = (container: ContainerInterface) =>
    new SyncServiceProvider(container)

export const createAsyncServiceProvider = (container: ContainerInterface) =>
    new AsyncServiceProvider(container)
