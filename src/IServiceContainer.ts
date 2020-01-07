import {IServiceFactoryFunction} from './IServiceFactoryFunction'

/**
 * Service container itself
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
    add(key: string, constructor: { new(...args: any[]): any }): this

    /**
     * Add a new service factory to the container.
     * It works the same way as add() but with a function as parameter.
     *
     * @param key
     * @param factory
     */
    addFactory(key: string, factory: IServiceFactoryFunction): this

    /**
     * Return the service matching the passed key.
     * The found service will be casted to the specified generic type.
     *
     * @param key Service's unique string
     *
     * @throws ServiceNotFoundError Thrown when no service in matching the passed key.
     */
    get<T>(key: string): T
}
