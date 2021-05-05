import 'reflect-metadata'
import {ContainerBuilderInterface, LifeCycle, ServiceKey, SyncServiceProviderInterface} from '../../src/V2/Interfaces'
import {createContainerBuilder} from '../../src/V2/Implementation/Container'

const Service = (serviceKey: ServiceKey): ClassDecorator => target => {
    Reflect.defineMetadata("Service@ServiceKey", serviceKey, target)
}
const Inject = (serviceKey: ServiceKey): ParameterDecorator => (target, propertyKey, parameterIndex) => {
    // @ts-ignore
    const injectionTokens = Reflect.getOwnMetadata("Inject@ServiceKey", target) || {}
    injectionTokens[parameterIndex] = serviceKey
    // @ts-ignore
    Reflect.defineMetadata("Inject@ServiceKey", injectionTokens, target)
}

@Service("MyService")
class MyService {}

@Service("AnotherService")
class AnotherService {
    constructor(
        @Inject("MyService") public readonly myService: MyService
    ) {}
}

type Constructor<T> = { new(...args: any[]): T }

const reflectServiceLoader = (services: Constructor<unknown>[]) => (containerBuilder: ContainerBuilderInterface) => {
    const servicesFactories = services.map(constructor => {
        const serviceKey = Reflect.getOwnMetadata("Service@ServiceKey", constructor)

        const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata("Inject@ServiceKey", constructor) || {}
        const injectionTokensKeys = Object.keys(injectionTokens)

        return [ serviceKey, (provider: SyncServiceProviderInterface) => {
            const factoryParameters = injectionTokensKeys.map(key => {
                return provider.get(injectionTokens[key])
            })

            return new constructor(...factoryParameters)
        }]
    })

    servicesFactories.forEach(([ serviceKey, factory ]) => containerBuilder.addFactory(serviceKey, factory, LifeCycle.Singleton))
}

it('should add service when using reflection', function () {
    // Arrange
    const container = createContainerBuilder({
        loaders: [ reflectServiceLoader([ MyService, AnotherService ]) ]
    }).build()

    // Act
    const anotherService = container.get<AnotherService>("AnotherService")

    // Assert
    expect(anotherService.myService).toBeInstanceOf(MyService)
})
