import {Constructor, ImportService} from '../types'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {ServiceLoader} from '../loaders/ServiceLoader'
import {IServiceLoader} from '../loaders/IServiceLoader'

/**
 * Create a plain service loader.
 * This loader allow shorter service declaration by passing collections of services.
 *
 * @param serviceConstructors
 * @param serviceFactories
 */
export function createPlainServiceLoader(serviceConstructors: ImportService<Constructor>[], serviceFactories: ImportService<IServiceFactoryFunction>[]): IServiceLoader {
    return new ServiceLoader(serviceConstructors, serviceFactories)
}
