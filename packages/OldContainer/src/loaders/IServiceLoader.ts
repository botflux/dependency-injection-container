import {IServiceContainer} from '../IServiceContainer'

/**
 * Import a group of service in a service container.
 */
export interface IServiceLoader {

    /**
     * Imports services in the given container.
     *
     * @param container
     */
    load(container: IServiceContainer): void
}
