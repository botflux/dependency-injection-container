import {IServiceContainerFactory} from './IServiceContainerFactory'
import {IServiceContainer} from '../IServiceContainer'
import {ServiceContainer} from '../ServiceContainer'
import {IServiceContainerFactoryOptions} from './IServiceContainerFactoryOptions'
import {ReflectServiceContainer} from '../ReflectServiceContainer'

const defaultOptions: IServiceContainerFactoryOptions = {
    useReflection: false
}

export class ServiceContainerFactory implements IServiceContainerFactory {
    private readonly _options: IServiceContainerFactoryOptions

    constructor(options: IServiceContainerFactoryOptions = defaultOptions) {
        this._options = options
    }

    /**
     * Creates a new instance of IServiceContainer
     */
    create(): IServiceContainer {
        return this._options.useReflection
            ? new ReflectServiceContainer()
            : new ServiceContainer()
    }

}
