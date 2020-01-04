namespace ServiceContainer {
    /**
     * A function that create a service
     */
    export interface IServiceFactoryFunction {
        (container: IServiceContainer): any
    }
}
