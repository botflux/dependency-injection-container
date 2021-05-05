import {IServiceContainer} from '../IServiceContainer'

/**
 * A factory that creates IServiceContainer
 */
export interface IServiceContainerFactory {
    /**
     * Creates IServiceContainer instances.
     */
    create(): IServiceContainer
}
