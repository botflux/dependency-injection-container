import {IServiceContainer} from '../IServiceContainer'
import {IServiceContainerFactoryOptions} from './IServiceContainerFactoryOptions'
import {defaultOptions, ServiceContainerFactory} from './ServiceContainerFactory'

/**
 * Creates IServiceContainer instances. This function is an alias to service container factory's create method.
 *
 * ```typescript
 * const container = createServiceContainer()
 * // ===
 * const container = new ServiceContainerFactory().create()
 *
 * const container = createServiceContainer({ useReflection: true })
 * // ===
 * const container = new ServiceContainerFactory({ useReflection: true }).create()
 * ```
 *
 * @param config
 */
export function createServiceContainer(config: IServiceContainerFactoryOptions = defaultOptions): IServiceContainer {
    return new ServiceContainerFactory(config).create()
}
