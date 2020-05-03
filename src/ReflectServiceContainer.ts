import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceAlreadyRegisteredError} from './errors/ServiceAlreadyRegisteredError'
import {ServiceNotFoundError} from './errors/ServiceNotFoundError'
import {INJECT_TOKEN_METADATA} from './Constants'
import {IServiceContainerOptions} from './IServiceContainerOptions'
import {ServiceContainerDictionary} from './types'

export const defaultReflectServiceContainerOptions: IServiceContainerOptions = {
    allowServiceOverride: false
}

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
 *
 * ```typescript
 * const container: IServiceContainer = createServiceContainer()
 *      .addFactory('connectionString', () => 'mysql://localhost:3306/myDb?user=root&password=root')
 *
 * class Repository {
 *     constructor(@Inject('connectionString') private connectionString: string) {}
 * }
 *
 * const repository: Repository = container.resolve<Repository>(Repository)
 * ```
 */
export class ReflectServiceContainer implements IServiceContainer {
    /**
     * Holds services instances
     */
    private _services: ServiceContainerDictionary = {}

    private _options: IServiceContainerOptions

    constructor(containerOptions: IServiceContainerOptions = defaultReflectServiceContainerOptions) {
        this._options = containerOptions
    }

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
        if (!this._options.allowServiceOverride && key in this._services) {
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
     * Delete the service matching the given key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError Thrown when no service is matching the passed key.
     */
    delete(key: string): this {
        if (!(key in this._services)) {
            throw new ServiceNotFoundError(key)
        }

        delete this._services[key]

        return this
    }

    /**
     * This getter must only be used for tests purposes.
     */
    get services() {
        return this._services
    }

    /**
     * Resolve a constructor.
     * It will have the same effect as `add` ut without registering the instance in the container.
     *
     * @param constructor
     */
    resolve<TService>(constructor: { new(...args: any[]): TService }): TService {
        // @ts-ignore
        const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, constructor) || {}
        const injectionTokensKeys = Object.keys(injectionTokens)

        return new constructor(...injectionTokensKeys.map(key => {
            return this.get(injectionTokens[key])
        }))
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
