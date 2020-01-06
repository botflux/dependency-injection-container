import {createServiceContainerHelpers, IServiceContainer, IServiceContainerHelpers, ServiceContainer} from '../../src'

export const container: IServiceContainer = new ServiceContainer()
export const helpers: IServiceContainerHelpers = createServiceContainerHelpers(container)
