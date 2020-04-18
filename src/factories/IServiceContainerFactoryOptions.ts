/**
 * Represents options of IServiceContainerFactory.
 */
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
}
