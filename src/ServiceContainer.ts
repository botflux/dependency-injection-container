import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceContainerDictionary} from './ServiceContainerDictionary'
import {ServiceAlreadyRegisteredError} from './errors/ServiceAlreadyRegisteredError'
import {ServiceNotFoundError} from './errors/ServiceNotFoundError'

export class ServiceContainer implements IServiceContainer {

    /**
     * Holds every services
     */
    private readonly _container: ServiceContainerDictionary = {}

    /**
     * Add a new service to the container.
     * This method returns itself.
     *
     * @param key A unique string
     * @param factory A function that will create the service
     */
    add(key: string, factory: IServiceFactoryFunction): this {
        if (key in this._container) {
            throw new ServiceAlreadyRegisteredError(key)
        }

        // add the new service
        this._container[key] = factory(this)

        return this
    }

    /**
     * Return the service matching the passed key.
     * The found service will be casted to the specified generic type.
     *
     * @param key Service's unique string
     */
    get<T>(key: string): T {
        if (!(key in this._container)) {
            throw new ServiceNotFoundError(key)
        }

        return this._container[key] as T
    }
}
