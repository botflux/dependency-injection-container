import {IServiceContainer} from '../IServiceContainer'
import {DeclareService} from '../decorators/DeclareService'
import {InjectServiceProperty} from '../decorators/InjectServiceProperty'
import {InjectServiceConstructor} from '../decorators/InjectServiceConstructor'
import {IServiceContainerHelpers} from './IServiceContainerHelpers'

/**
 * Return an object with the container and decorators bound to this container.
 *
 * @param container
 */
export function createServiceContainerHelpers(container: IServiceContainer): IServiceContainerHelpers {
    return {
        container,
        Service: DeclareService.bind(undefined, container),
        InjectProp: InjectServiceProperty.bind(undefined, container),
        InjectCons: InjectServiceConstructor.bind(undefined, container)
    }
}
