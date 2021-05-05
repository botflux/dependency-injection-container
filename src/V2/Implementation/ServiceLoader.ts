import {ContainerBuilderInterface, LifeCycle, ServiceKey, SyncServiceProviderInterface} from '../Interfaces'

export const Service = (serviceKey: ServiceKey): ClassDecorator => target => {
    // @ts-ignore
    Reflect.defineMetadata('Service@ServiceKey', serviceKey, target)
}
export const Inject = (serviceKey: ServiceKey): ParameterDecorator => (target, propertyKey, parameterIndex) => {
    // @ts-ignore
    const injectionTokens = Reflect.getOwnMetadata('Inject@ServiceKey', target) || {}
    injectionTokens[parameterIndex] = serviceKey
    // @ts-ignore
    Reflect.defineMetadata('Inject@ServiceKey', injectionTokens, target)
}
type Constructor<T> = { new(...args: any[]): T }
export const reflectServiceLoader = (services: Constructor<unknown>[]) => (containerBuilder: ContainerBuilderInterface) => {
    const servicesFactories = services.map(constructor => {
        // @ts-ignore
        const serviceKey = Reflect.getOwnMetadata('Service@ServiceKey', constructor)

        // @ts-ignore
        const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata('Inject@ServiceKey', constructor) || {}
        const injectionTokensKeys = Object.keys(injectionTokens)

        return [serviceKey, (provider: SyncServiceProviderInterface) => {
            const factoryParameters = injectionTokensKeys.map(key => {
                return provider.get(injectionTokens[key])
            })

            return new constructor(...factoryParameters)
        }]
    })

    servicesFactories.forEach(([serviceKey, factory]) => containerBuilder.addFactory(serviceKey, factory, LifeCycle.Singleton))
}
