namespace ServiceContainer {
    /**
     * Service container itself
     */
    export interface IServiceContainer {
        /**
         * Add a new service to the container.
         * This method returns itself.
         *
         * @param key A unique string
         * @param factory A function that will create the service
         */
        add(key: string, factory: IServiceFactoryFunction): this

        /**
         * Return the service matching the passed key.
         * The found service will be casted to the specified generic type.
         *
         * @param key Service's unique string
         */
        get<T>(key: string): T
    }
}
