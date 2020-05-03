import {IServiceLoader} from './IServiceLoader'
import {IServiceContainer} from '../IServiceContainer'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {Constructor, ImportService} from '../types'

/**
 * Load a collection of service in a service container implementation.
 *
 * ```typescript
 * import 'reflect-metadata'
 * import {createServiceContainer, ServiceContainer, Constructor, ImportService} from '@botflx/dependency-injection-container'
 *
 * // List of service constructors
 * const serviceConstructors: ImportService<Constructor>[] = [...]
 * const serviceFactories: ImportService<IServiceFactoryFunction>[] = [...]
 *
 * // Creates a service container
 * // In fact you can use a ReflectServiceLoader with a non-reflection service container.
 * const container = createServiceContainer()
 * const plainServiceLoader = new ServiceLoader(serviceConstructors, serviceFactories)
 *
 * // Load services in service loader
 * plainServiceLoader.load(container)
 * ```
 */
export class ServiceLoader implements IServiceLoader {
    private readonly _serviceConstructors: ImportService<Constructor>[]
    private readonly _serviceFactories: ImportService<IServiceFactoryFunction>[]

    constructor(serviceConstructors: ImportService<Constructor>[], serviceFactories: ImportService<IServiceFactoryFunction>[]) {
        this._serviceConstructors = serviceConstructors
        this._serviceFactories = serviceFactories
    }

    load(container: IServiceContainer): void {
        this._serviceConstructors.forEach(_import => {
            container.add(_import.name, _import.service)
        })

        this._serviceFactories.forEach(_import => {
            container.addFactory(_import.name, _import.service)
        })
    }
}
