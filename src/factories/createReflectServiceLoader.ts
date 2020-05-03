import {Constructor, ImportService} from '../types'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {ReflectServiceLoader} from '../loaders/ReflectServiceLoader'
import {IServiceLoader} from '../loaders/IServiceLoader'


/**
 * Create a reflect service loader.
 * This loader allow shorter service declaration by passing collections of services.
 *
 * @param serviceConstructors
 * @param serviceFactories
 */
export function createReflectServiceLoader(serviceConstructors: Constructor[], serviceFactories: ImportService<IServiceFactoryFunction>[]): IServiceLoader {
    return new ReflectServiceLoader(serviceConstructors, serviceFactories)
}
