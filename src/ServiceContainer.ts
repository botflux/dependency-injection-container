import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceAlreadyRegisteredError} from './errors/ServiceAlreadyRegisteredError'
import {ServiceNotFoundError} from './errors/ServiceNotFoundError'
import {IServiceContainerOptions} from './IServiceContainerOptions'
import {ServiceContainerDictionary} from './types'

export const defaultServiceContainerOptions: IServiceContainerOptions = {
    allowServiceOverride: false
}

/**
 * An implementation of ServiceContainer.
 * If you want to use @Inject decorator, you should use ReflectServiceContainer class.
 *
 * ```typescript
 * class Logger {}
 * class Db {
 *     constructor(container: IServiceContainer) {
 *         container.get<Logger>('logger')
 *         container.get<{ dbUser: string, dbPass: string }>('options')
 *     }
 * }
 *
 * const container = new ReflectServiceContainer()
 *      .addFactory('config', () => ({ dbUser: 'user', dbPass: 'pass' })
 *      .add('logger', Logger)
 *      .add('db', Db)
 *
 * const logger = container.get<Logger>('logger')
 * const db = container.get<Db>('db')
 *
 * // You can also delete services.
 * container.delete('db', Db)
 * ```
 *
 * ```typescript
 * const container: IServiceContainer = createServiceContainer()
 *      .addFactory('connectionString', () => 'mysql://localhost:3306/myDb?user=root&password=root')
 *
 * class Repository {
 *      private readonly _connectionString: string
 *
 *     constructor(container: IServiceContainer) {
 *         this._connectionString = container.get<string>('connectionString')
 *     }
 * }
 *
 * const repository: Repository = container.resolve<Repository>(Repository)
 * ```
 */
export class ServiceContainer implements IServiceContainer {
    private _services: ServiceContainerDictionary = {}
    private _serviceFactories: { [key: string]: IServiceFactoryFunction } = {}
    private _options: IServiceContainerOptions

    constructor(containerOptions: IServiceContainerOptions = defaultServiceContainerOptions) {
        this._options = containerOptions;
    }

    /**
     * Add a new service using service's constructor.
     *
     * @param key
     * @param constructor
     *
     * @throws ServiceAlreadyRegisteredError
     */
    add(key: string, constructor: { new(...args: any[]): any }): this {
        this.addFactory(key, c => new constructor(c))

        return this
    }

    /**
     * Add a new service using a service factory function.
     *
     * @param key
     * @param factory
     *
     * @throws ServiceAlreadyRegisteredError
     */
    addFactory(key: string, factory: IServiceFactoryFunction): this {
        if (!this._options.allowServiceOverride && key in this._serviceFactories) {
            throw new ServiceAlreadyRegisteredError(key)
        }

        this._serviceFactories[key] = factory
        delete this._services[key]
        // this._services[key] = factory(this)

        return this
    }

    /**
     * Return the service matching the passed key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError
     */
    get<T>(key: string): T {
        if (!(key in this._serviceFactories)) {
            throw new ServiceNotFoundError(key)
        }

        if (!(key in this._services)) {
            this._services[key] = this._serviceFactories[key] (this)
        }

        return this._services[key] as T
    }

    /**
     * Return the service inner container.
     * You should use this only for test purposes.
     */
    get services () {
        return this._services
    }

    /**
     * Return the service factories collection.
     * YOu should use this only for test proposes.
     */
    get factories() {
        return this._serviceFactories
    }

    /**
     * Delete the service matching the given key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError Thrown when no service is matching the passed key.
     */
    delete(key: string): this {
        if (!(key in this._serviceFactories)) {
            throw new ServiceNotFoundError(key)
        }

        delete this._serviceFactories[key]

        if (key in this._services) {
            delete this._services[key]
        }

        return this
    }

    /**
     * Resolve a constructor.
     * It will have the same effect as `add` ut without registering the instance in the container.
     *
     * @param constructor
     */
    resolve<TService>(constructor: { new(...args: any[]): TService }): TService {
        return new constructor(this)
    }

    /**
     * Resolve a factory function.
     * It will have the same effect as `addFactory` ut without registering the instance in the container.
     *
     * @param factory
     */
    resolveFactory<TService>(factory: IServiceFactoryFunction): TService {
        return factory(this)
    }
}
