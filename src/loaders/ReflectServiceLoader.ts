import {IServiceLoader} from './IServiceLoader'
import {IServiceContainer} from '../IServiceContainer'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {SERVICE_TOKEN_METADATA} from '../Constants'
import {ServiceNameNotFoundError} from '../errors/ServiceNameNotFoundError'
import {Constructor, ImportService} from '../types'

/**
 * Load a collection of service in a service container implementation.
 *
 * ```typescript
 * import 'reflect-metadata'
 * import {createServiceContainer, ReflectServiceLoader, Constructor, ImportService} from '@botflx/dependency-injection-container'
 *
 * // List of service constructors
 * const serviceConstructors: Constructor[] = [...]
 * const serviceFactories: ImportService<IServiceFactoryFunction>[] = [...]
 *
 * // Creates a service container
 * // In fact you can use a ReflectServiceLoader with a non-reflection service container.
 * const container = createServiceContainer()
 * const reflectServiceLoader = new ReflectServiceLoader(serviceConstructors, serviceFactories)
 *
 * // Load services in service loader
 * reflectServiceLoader.load(container)
 * ```
 */
export class ReflectServiceLoader implements IServiceLoader {

    /**
     * Service constructors to load.
     */
    private readonly _serviceConstructors: Constructor[]

    /**
     * Service factories to load.
     */
    private readonly _serviceFactories: ImportService<IServiceFactoryFunction>[]

    /**
     * Creates a new instance of *ReflectServiceLoader* by passing a collection of constructor and a collection of factories.
     *
     * @param serviceConstructor Collection of service constructor
     * @param serviceFactories Collection of service factories
     */
    constructor(serviceConstructor: Constructor[], serviceFactories: ImportService<IServiceFactoryFunction>[]) {
        this._serviceConstructors = serviceConstructor
        this._serviceFactories = serviceFactories
    }

    load(container: IServiceContainer): void {
        this._serviceConstructors.forEach(constructor => {
            const serviceName = ReflectServiceLoader.getServiceName(constructor)
            container.add(serviceName, constructor)
        })

        this._serviceFactories.forEach(_import => {
            container.addFactory(_import.name, _import.service)
        })
    }

    /**
     * Returns service name described by `@Service` decorator.
     *
     * @param constructor
     */
    private static getServiceName (constructor: Constructor): string {
        // @ts-ignore
        const serviceName: string | undefined = Reflect.getOwnMetadata(SERVICE_TOKEN_METADATA, constructor)

        if (!serviceName) {
            throw new ServiceNameNotFoundError()
        }

        return serviceName
    }
}
