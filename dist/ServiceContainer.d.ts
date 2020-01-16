import { IServiceContainer } from './IServiceContainer';
import { IServiceFactoryFunction } from './IServiceFactoryFunction';
import { ServiceContainerDictionary } from './ServiceContainerDictionary';
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
 */
export declare class ServiceContainer implements IServiceContainer {
    private _services;
    /**
     * Add a new service using service's constructor.
     *
     * @param key
     * @param constructor
     *
     * @throws ServiceAlreadyRegisteredError
     */
    add(key: string, constructor: {
        new (...args: any[]): any;
    }): this;
    /**
     * Add a new service using a service factory function.
     *
     * @param key
     * @param factory
     *
     * @throws ServiceAlreadyRegisteredError
     */
    addFactory(key: string, factory: IServiceFactoryFunction): this;
    /**
     * Return the service matching the passed key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError
     */
    get<T>(key: string): T;
    /**
     * Return the service inner container.
     * You should use this only for test purposes.
     */
    get services(): ServiceContainerDictionary;
    /**
     * Delete the service matching the given key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError Thrown when no service is matching the passed key.
     */
    delete(key: string): this;
}
//# sourceMappingURL=ServiceContainer.d.ts.map