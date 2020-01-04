import {IServiceContainer} from '../IServiceContainer'

/**
 * Inject a service into the target property.
 *
 * @param container Service container that hold the wanted service
 * @param serviceName Service name
 *
 * @constructor
 */
export function InjectService(container: IServiceContainer, serviceName: string) {
    return function (target: any, propertyKey: string | symbol) {
        // This variable is used for testing.
        // When we test classes that use InjectService, the underlying container will probably be empty.
        // To avoid filling a container that will be shared through the app, we can fill this variable.
        // When this variable is filled then its content will be returned and not the container's version.
        let service: any | undefined

        // This ts ignore is here to ignore Reflect (this need to be provided by the user)
        // @ts-ignore
        const update = Reflect.defineProperty(
            target,
            propertyKey,
            {
                configurable: true,
                enumerable: true,
                get: () => {
                    if (!service) {
                        return container.get(serviceName)
                    }

                    return service
                },
                set(v: any): void {
                    service = v
                }
            }
        )

        if (!update) {
            throw new Error("Unable to update property")
        }
    }
}
