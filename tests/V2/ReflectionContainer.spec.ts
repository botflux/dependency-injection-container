import 'reflect-metadata'
import {createContainerBuilder} from '../../src/V2/Implementation/Container'
import {Inject, reflectServiceLoader, Service} from '../../src/V2/Implementation/ServiceLoader'
import {LifeCycle} from '../../src/V2/Interfaces'

@Service("MyService", LifeCycle.Singleton)
class MyService {}

@Service("AnotherService", LifeCycle.Singleton)
class AnotherService {
    constructor(
        @Inject("MyService") public readonly myService: MyService
    ) {}
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
