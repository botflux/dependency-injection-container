import {IServiceContainer} from '../IServiceContainer'
import {IServiceContainerFactoryOptions} from './IServiceContainerFactoryOptions'
import {defaultOptions, ServiceContainerFactory} from './ServiceContainerFactory'

/**
 * Creates IServiceContainer instances. This function is an alias to service container factory's create method.
 *
 * @param config
 */
export function createServiceContainer(config: IServiceContainerFactoryOptions = defaultOptions): IServiceContainer {
    return new ServiceContainerFactory(config).create()
}
