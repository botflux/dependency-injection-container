/**
 * Represents options of IServiceContainerFactory.
 */
import {IServiceLoader} from '../loaders/IServiceLoader'

export interface IServiceContainerFactoryOptions {
    /**
     * If true the ServiceContainerFactory will returns a service container
     * handling metadata and decorators; otherwise it will returns a plain
     * service container.
     */
    useReflection: boolean

    /**
     * If true an IServiceContainer will allow you to call
     * `container.add()` multiple times with the same service name.
     */
    allowServiceOverride?: boolean

    /**
     * Specify service you want to load by default.
     * If you are using Reflection you can add new service with `@Service` and `createReflectServiceLoader`
     */
    serviceLoader?: IServiceLoader
}
