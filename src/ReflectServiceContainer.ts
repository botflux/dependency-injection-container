import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceContainerDictionary} from './ServiceContainerDictionary'
import {ServiceAlreadyRegisteredError, ServiceNotFoundError} from './errors'
import {INJECT_TOKEN_METADATA} from './Constants'

/**
 * An implementation of ServiceContainer that uses Reflection.
 * With this implementation you are able to use the @Inject decorator.
 * Note: This implementation need reflection in order to work (e.g npm install reflect-metadata).
 *
 * ```typescript
 * class Logger {}
 * class Db {
 *     constructor(@Inject('logger') logger: Logger, @Inject('config') config: any) {}
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
export class ReflectServiceContainer implements IServiceContainer {
    /**
     * Holds services instances
     */
    private _services: ServiceContainerDictionary = {}

    /**
     * Add a new service using service's constructor
     *
     * @param key
     * @param constructor
     *
     * @throws ServiceAlreadyRegisteredError
     */
    add(key: string, constructor: { new(...args: any[]): any }): this {
        // @ts-ignore
        const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, constructor) || {}
        const injectionTokensKeys = Object.keys(injectionTokens)

        const factory = (container: IServiceContainer) => new constructor(...injectionTokensKeys.map(key => {
            return container.get(injectionTokens[key])
        }))

        return this.addFactory(key, factory)
    }

    /**
     * Add a new service using a service factory function
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

}
