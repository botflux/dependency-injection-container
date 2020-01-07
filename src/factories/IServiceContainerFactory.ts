import {IServiceContainer} from '../IServiceContainer'

/**
 * Creates IServiceContainer
 */
export interface IServiceContainerFactory {
    /**
     * Creates IServiceContainer instances.
     */
    create(): IServiceContainer
}
