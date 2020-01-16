import { IServiceContainer } from './IServiceContainer';
import { IServiceFactoryFunction } from './IServiceFactoryFunction';
import { ServiceContainerDictionary } from './ServiceContainerDictionary';
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
export declare class ReflectServiceContainer implements IServiceContainer {
    /**
     * Holds services instances
     */
    private _services;
    /**
     * Add a new service using service's constructor
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
     * Add a new service using a service factory function
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
     * Delete the service matching the given key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError Thrown when no service is matching the passed key.
     */
    delete(key: string): this;
    /**
     * This getter must only be used for tests purposes.
     */
    get services(): ServiceContainerDictionary;
}
//# sourceMappingURL=ReflectServiceContainer.d.ts.map