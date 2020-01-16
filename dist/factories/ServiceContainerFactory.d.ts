import { IServiceContainerFactory } from './IServiceContainerFactory';
import { IServiceContainer } from '../IServiceContainer';
import { IServiceContainerFactoryOptions } from './IServiceContainerFactoryOptions';
/**
 * Default option of ServiceContainerFactory
 */
export declare const defaultOptions: IServiceContainerFactoryOptions;
/**
 * Creates IServiceContainer instances.
 *
 * ```typescript
 * new ServiceContainerFactory()
 * new ServiceContainerFactory({
 *     useReflection: true
 * })
 * ```
 */
export declare class ServiceContainerFactory implements IServiceContainerFactory {
    private readonly _options;
    constructor(options?: IServiceContainerFactoryOptions);
    /**
     * Creates a new instance of IServiceContainer
     *
     * ```typescript
     * const container: IServiceContainer = new ServiceContainerFactory().create()
     * ```
     */
    create(): IServiceContainer;
}
//# sourceMappingURL=ServiceContainerFactory.d.ts.map