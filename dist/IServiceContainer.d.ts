import { IServiceFactoryFunction } from './IServiceFactoryFunction';
/**
 * Service container itself.
 * If you want to get a class instance implementing this interface you should use `IServiceContainerFactory`.
 * You should avoid instantiate IServiceContainer implementation directly, instead use an `IServiceContainerFactory`.
 *
 * ```typescript
 * const simpleContainer: IServiceContainer = new ServiceContainer()
 * // /!\ Need npm install reflect-metadata
 * const reflectContainer: IServiceContainer = new ReflectServiceContainer()
 *
 * // ===
 *
 * const simpleContainer: IServiceContainer = new ServiceContainerFactory().create()
 * // /!\ Need npm install reflect-metadata
 * const reflectContainer: IServiceContainer = new ServiceContainerFactory({ useReflection: true }).create()
 * ```
 *
 * ```typescript
 * class Logger {
 *      private readonly _logPath
 *
 *     constructor(container: IServiceContainer) {
 *         this._logPath = container.get<{ logPath: string }>('config').logPath
 *     }
 *
 *     log(message: string) {}
 * }
 *
 * const container: IServiceContainer = new ServiceContainerFactory().create()
 * container
 *      .addFactory('config', () => ({ logPath: '../var/app.log' }))
 *      .add('logger', Logger)
 *
 * container.get<Logger>('logger').log('my message')
 * ```
 *
 * ```typescript
 * // You can also delete services
 * const container: IServiceContainer = new ServiceContainerFactory()
 *      .create()
 *      .addFactory('config', () => ({ secret: 'hello' }))
 *      .delete('config')
 * ```
 */
export interface IServiceContainer {
    /**
     * Add a new service to the container.
     * This method is fluent.
     *
     * @param key A unique string
     * @param constructor Service's constructor
     *
     * @throws ServiceAlreadyRegisteredError Thrown when the key you want to use is already taken.
     */
    add(key: string, constructor: {
        new (...args: any[]): any;
    }): this;
    /**
     * Add a new service factory to the container.
     * It works the same way as add() but with a function as parameter.
     *
     * @param key
     * @param factory
     */
    addFactory(key: string, factory: IServiceFactoryFunction): this;
    /**
     * Return the service matching the passed key.
     * The found service will be casted to the specified generic type.
     *
     * @param key Service's unique string
     *
     * @throws ServiceNotFoundError Thrown when no service in matching the passed key.
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
}
//# sourceMappingURL=IServiceContainer.d.ts.map