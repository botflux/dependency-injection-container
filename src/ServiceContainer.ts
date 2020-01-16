import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceContainerDictionary} from './ServiceContainerDictionary'
import {ServiceAlreadyRegisteredError} from './errors/ServiceAlreadyRegisteredError'
import {ServiceNotFoundError} from './errors/ServiceNotFoundError'

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
 * ```
 */
export class ServiceContainer implements IServiceContainer {
    private _services: ServiceContainerDictionary = {}

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
        if (key in this._services) {
            throw new ServiceAlreadyRegisteredError(key)
        }

        this._services[key] = factory(this)

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
        if (!(key in this._services)) {
            throw new ServiceNotFoundError(key)
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

    delete(key: string): this {
        if (!(key in this._services)) {
            throw new ServiceNotFoundError(key)
        }

        delete this._services[key]

        return this
    }
}
