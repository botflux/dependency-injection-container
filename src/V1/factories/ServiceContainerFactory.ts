import {IServiceContainerFactory} from './IServiceContainerFactory'
import {IServiceContainer} from '../IServiceContainer'
import {ServiceContainer} from '../ServiceContainer'
import {IServiceContainerFactoryOptions} from './IServiceContainerFactoryOptions'
import {ReflectServiceContainer} from '../ReflectServiceContainer'
import {IOptionMapper} from '../mappers/IOptionMapper'
import {OptionMapper} from '../mappers/OptionMapper'

/**
 * Default option of ServiceContainerFactory
 */
export const defaultOptions: IServiceContainerFactoryOptions = {
    useReflection: false,
    allowServiceOverride: false,
    serviceLoader: undefined
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
    private readonly _optionMapper: IOptionMapper

    constructor(options: IServiceContainerFactoryOptions = defaultOptions, optionMapper: IOptionMapper = new OptionMapper()) {
        this._options = options
        this._optionMapper = optionMapper
    }

    /**
     * Creates a new instance of IServiceContainer
     *
     * ```typescript
     * const container: IServiceContainer = new ServiceContainerFactory().create()
     * ```
     */
    create(): IServiceContainer {
        const containerOptions = this._optionMapper.toContainerOptions(this._options)

        if (this._options.useReflection && (!Reflect || !('defineMetadata' in Reflect) || !('getOwnMetadata' in Reflect))) {
            throw new Error(`You can't create a container supporting decorators without the reflect-metadata polyfill included.`)
        }

        const container = this._options.useReflection
            ? new ReflectServiceContainer(containerOptions)
            : new ServiceContainer(containerOptions)

        if (this._options.serviceLoader) {
            this._options.serviceLoader.load(container)
        }

        return container
    }

}
