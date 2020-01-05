import {IServiceContainer} from '../IServiceContainer'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {INJECTION_KEY} from './Constants'

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
        const defaultServiceFactory = (container: IServiceContainer) => new constructor(container)

        // Define a default service factory
        if (!serviceFactory) {
            // If the reflect library is not provided then we give the default factory
            if (!Reflect || !Reflect.getMetadata) {
                serviceFactory = defaultServiceFactory
            } else {
                const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata(INJECTION_KEY, constructor) || {}
                const injectionTokensKeys = Object.keys(injectionTokens)

                if (injectionTokensKeys.length > 0) {
                    serviceFactory = (container: IServiceContainer) => new constructor(...injectionTokensKeys.map(key => {
                        return container.get(injectionTokens[key])
                    }))
                } else {
                    serviceFactory = defaultServiceFactory
                }
            }
        }

        // Add the service to the container
        container.add(serviceName, serviceFactory)

        return constructor
    }
}
