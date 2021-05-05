import 'reflect-metadata'
import {createContainerBuilder} from '../../src/V2/Implementation/Container'
import {Inject, reflectServiceLoader, Service} from '../../src/V2/Implementation/ServiceLoader'

@Service("MyService")
class MyService {}

@Service("AnotherService")
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
