import {IServiceContainer} from '../IServiceContainer'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'

/**
 * Decorate a class service. It will declare the class as a service.
 *
 * @param container Service container you want to populate
 * @param serviceName Service's name
 * @param serviceFactory Service's factory, in case you don't specify it, a default service factory will be used.
 *
 * @constructor
 */
export function DeclareService (container: IServiceContainer, serviceName: string, serviceFactory?: IServiceFactoryFunction) {
    return function<T extends {new(...args:any[]):{}}>(constructor: T) {

        // Define a default service factory
        if (!serviceFactory) {
            serviceFactory = (container: IServiceContainer) => new constructor(container)
        }

        // Add the service to the container
        container.add(serviceName, serviceFactory)

        return constructor
    }
}
