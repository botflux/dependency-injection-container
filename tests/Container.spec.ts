class MyService {}

interface ContainerInterface {
    get<T> (key: string | Symbol): T
    getAsync<T> (key: string | Symbol): Promise<T>
}

type ServiceFactory<TService> = (container: ContainerInterface) => TService
type ServiceConstructor<TService> = { new(...args: any[]): TService }

interface ContainerBuilderInterface {
    addFactory<TService>(key: string | Symbol, factory: ServiceFactory<TService>): this
    addConstructor<TConstructor>(key: string | Symbol, constructor: ServiceConstructor<TConstructor>): this

    addFactoryAsync<TService>(key: string | Symbol, factory: ServiceFactory<Promise<TService>>): this

    build(): ContainerInterface
}

class Container implements ContainerInterface {
    constructor(
        private readonly syncFactories: Map<string | Symbol, ServiceFactory<unknown>>,
        private readonly asyncFactories: Map<string | Symbol, ServiceFactory<Promise<unknown>>>) {}

    get<T>(key: string | Symbol): T {
        const factory = this.syncFactories.get(key)

        if (!factory)
            throw new Error("No service found")

        return factory(this) as T
    }

    getAsync<T>(key: string | Symbol): Promise<T> {
        const factory = this.asyncFactories.get(key)

        if (!factory)
            throw new Error("No service found")

        return factory(this) as Promise<T>
    }
}

class ContainerBuilder implements ContainerBuilderInterface {
    private syncFactories: Map<string | Symbol, ServiceFactory<unknown>> =
        new Map<string | Symbol, ServiceFactory<unknown>>()

    private asyncFactories: Map<string | Symbol, ServiceFactory<Promise<unknown>>> =
        new Map<string | Symbol, ServiceFactory<Promise<unknown>>>();

    addFactory<TService>(key: string | Symbol, factory: ServiceFactory<TService>): this {
        this.syncFactories.set(key, factory)
        return this
    }

    build(): ContainerInterface {
        return new Container(this.syncFactories, this.asyncFactories);
    }

    addConstructor<TConstructor>(key: string | Symbol, constructor: ServiceConstructor<TConstructor>): this {
        this.syncFactories.set(key, container => new constructor(container))
        return this
    }

    addFactoryAsync<TService>(key: string | Symbol, factory: ServiceFactory<Promise<TService>>): this {
        this.asyncFactories.set(key, factory)
        return this;
    }

}

const createContainerBuilder = () => new ContainerBuilder()

it('should add factories', function () {
    // Arrange
    const builder = createContainerBuilder()

    const container = builder
        .addFactory('MyService', () => new MyService())
        .build()

    // Act
    const myService = container.get<MyService> ('MyService')

    // Assert
    expect(myService).toBeInstanceOf(MyService)
})

it('should add constructors', function () {
    // Arrange
    const symbol = Symbol("my service")

    const container = createContainerBuilder()
        .addConstructor(symbol, MyService)
        .build()

    // Act
    const myService = container.get<MyService>(symbol)

    // Assert
    expect(myService).toBeInstanceOf(MyService)
})

it('should add async factories', async function () {
    // Arrange
    const key = 'my service'
    const container = createContainerBuilder()
        .addFactoryAsync(key, () => Promise.resolve(new MyService()))
        .build()

    // Act
    const myService = await container.getAsync<MyService>(key)

    // Assert
    expect(myService).toBeInstanceOf(MyService)
})
