import {IServiceFactoryFunction} from './IServiceFactoryFunction'

/**
 * Service container itself
 */
export interface IServiceContainer {
    /**
     * Add a new service to the container.
     * This method returns itself.
     *
     * @param key A unique string
     * @param factory A function that will create the service
     *
     * @throws ServiceAlreadyRegisteredError Thrown when the key you want to use is already taken.
     */
    add(key: string, factory: IServiceFactoryFunction): this

    /**
     * Add a new service to the container.
     * This method is fluent.
     *
     * @param key A unique string
     * @param constructor A constructor
     *
     * @throws ServiceAlreadyRegisteredError Thrown when the key you want to use is already taken.
     */
    addConstructor<T>(key: string, constructor: {new(...args: any[]): T}): this

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
