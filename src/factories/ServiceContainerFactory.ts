import {IServiceContainerFactory} from './IServiceContainerFactory'
import {IServiceContainer} from '../IServiceContainer'
import {ServiceContainer} from '../ServiceContainer'
import {IServiceContainerFactoryOptions} from './IServiceContainerFactoryOptions'
import {ReflectServiceContainer} from '../ReflectServiceContainer'

/**
 * Default option of ServiceContainerFactory
 */
export const defaultOptions: IServiceContainerFactoryOptions = {
    useReflection: false
}

/**
 * Creates IServiceContainer instances.
 *
 * ```typescript
 * new ServiceContainerFactory()
 * new ServiceContainerFactory({
 *     useReflection: true
 * })
 * ```
 */
export class ServiceContainerFactory implements IServiceContainerFactory {
    private readonly _options: IServiceContainerFactoryOptions

    constructor(options: IServiceContainerFactoryOptions = defaultOptions) {
        this._options = options
    }

    /**
     * Creates a new instance of IServiceContainer
     *
     * ```typescript
     * const container: IServiceContainer = new ServiceContainerFactory().create()
     * ```
     */
    create(): IServiceContainer {
        return this._options.useReflection
            ? new ReflectServiceContainer()
            : new ServiceContainer()
    }

}
