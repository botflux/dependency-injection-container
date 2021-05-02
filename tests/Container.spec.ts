import {ContainerInterface, LifeCycle, ServiceNotFoundError} from '../src/V2/Interfaces'
import {createScopedContainerBuilder} from '../src/V2/Implementation/ScopedContainer'
import {createContainerBuilder} from '../src/V2/Implementation/Container'

class MyService {}
class AnotherService {
    constructor(public readonly myService: MyService) {}
}

class YetAnotherService {
    constructor(public readonly container: ContainerInterface) {}
}

class RandomNumberService {
    public readonly n: number = Math.random()
}

it('should add factories', function () {
    // Arrange
    const builder = createContainerBuilder()

    const container = builder
        .addFactory('MyService', () => new MyService(), LifeCycle.Singleton)
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
        .addConstructor(symbol, MyService, LifeCycle.Singleton)
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
        .addAsyncFactory(key, () => Promise.resolve(new MyService()), LifeCycle.Singleton)
        .build()

    // Act
    const myService = await container.getAsync<MyService>(key)

    // Assert
    expect(myService).toBeInstanceOf(MyService)
})

it('should pass the container to factories', function () {
    // Arrange
    const container = createContainerBuilder()
        .addConstructor('MyService', MyService, LifeCycle.Singleton)
        .addFactory("AnotherService", container => new AnotherService(container.get('MyService')), LifeCycle.Singleton)
        .build()

    // Act
    const anotherService = container.get<AnotherService>("AnotherService")

    // Assert
    expect(anotherService).toBeInstanceOf(AnotherService)
    expect(anotherService.myService).toBeInstanceOf(MyService)
})

it('should pass the container to constructors', function () {
    // Arrange
    const container = createContainerBuilder()
        .addConstructor('MyService', MyService, LifeCycle.Singleton)
        .addConstructor('YetAnotherService', YetAnotherService, LifeCycle.Singleton)
        .build()

    // Act
    const service = container.get<YetAnotherService>("YetAnotherService")

    // Assert
    expect(service).toBeInstanceOf(YetAnotherService)
    expect(service.container).not.toBeFalsy()
})

it('should pass sync factories to async factories', async function () {
    // Arrange
    const container = createContainerBuilder()
        .addFactory('Hello', () => "world", LifeCycle.Singleton)
        .addAsyncFactory('Hello world', container => Promise.resolve(`Hello ${container.get("Hello")}`), LifeCycle.Singleton)
        .build()

    // Act
    const helloWorld = await container.getAsync("Hello world")

    // Assert
    expect(helloWorld).toBe("Hello world")
})

it('should throw when overriding service', function () {
    // Arrange
    const builder = createContainerBuilder()

    // Act
    const shouldThrow1 = () => builder
        .addFactory('MyService', () => {}, LifeCycle.Singleton)
        .addFactory('MyService', () => {}, LifeCycle.Singleton)

    const shouldThrow2 = () => builder
        .addFactory('MyService', () => {}, LifeCycle.Singleton)
        .addAsyncFactory('MyService', () => Promise.resolve(), LifeCycle.Singleton)

    const shouldThrow3 = () => builder
        .addAsyncFactory('MyService', () => Promise.resolve(), LifeCycle.Singleton)
        .addFactory('MyService', () => {}, LifeCycle.Singleton)

    const shouldThrow4 = () => builder
        .addAsyncFactory('MyService', () => Promise.resolve(), LifeCycle.Singleton)
        .addAsyncFactory('MyService', () => Promise.resolve(), LifeCycle.Singleton)

    // Assert
    expect(shouldThrow1).toThrow(`Service with key "MyService" was already registered.`)
    expect(shouldThrow2).toThrow(`Service with key "MyService" was already registered.`)
    expect(shouldThrow3).toThrow(`Service with key "MyService" was already registered.`)
    expect(shouldThrow4).toThrow(`Service with key "MyService" was already registered.`)
})

it('should create singleton services', function () {
    // Arrange
    const container = createContainerBuilder()
        .addFactory("A", () => new RandomNumberService(), LifeCycle.Singleton)
        .addAsyncFactory("B", () => Promise.resolve(new RandomNumberService()), LifeCycle.Singleton)
        .addConstructor("C", RandomNumberService, LifeCycle.Singleton)
        .build()

    // Act
    const a1 = container.get<RandomNumberService>("A")
    const a2 = container.get<RandomNumberService>("A")

    const b1 = container.getAsync<RandomNumberService>("B")
    const b2 = container.getAsync<RandomNumberService>("B")

    const c1 = container.get<RandomNumberService>("A")
    const c2 = container.get<RandomNumberService>("A")

    // Assert
    expect(a1).toEqual(a2)
    expect(b1).toEqual(b2)
    expect(c1).toEqual(c2)
})

it('should create transient service', async function () {
    // Arrange
    const container = createContainerBuilder()
        .addFactory("A", () => new RandomNumberService(), LifeCycle.Transient)
        .addAsyncFactory("B", () => Promise.resolve(new RandomNumberService()), LifeCycle.Transient)
        .addConstructor("C", RandomNumberService, LifeCycle.Transient)
        .build()

    // Act
    const a1 = container.get<RandomNumberService>("A")
    const a2 = container.get<RandomNumberService>("A")

    const b1 = await container.getAsync<RandomNumberService>("B")
    const b2 = await container.getAsync<RandomNumberService>("B")

    const c1 = container.get<RandomNumberService>("A")
    const c2 = container.get<RandomNumberService>("A")

    // Assert
    expect(a1.n).not.toEqual(a2.n)
    expect(b1.n).not.toEqual(b2.n)
    expect(c1.n).not.toEqual(c2.n)
})

it('should create a scoped service', async function () {
    // Arrange
    const container = createContainerBuilder()
        .addFactory("D", () => new RandomNumberService(), LifeCycle.Singleton)
        .addAsyncFactory("E", () => Promise.resolve(new RandomNumberService()), LifeCycle.Singleton)
        .addConstructor("F", RandomNumberService, LifeCycle.Singleton)
        .build()


    const scopedContainerBuilder = createScopedContainerBuilder(container)
        .addFactory("A", () => new RandomNumberService(), LifeCycle.Singleton)
        .addAsyncFactory("B", () => Promise.resolve(new RandomNumberService()), LifeCycle.Singleton)
        .addConstructor("C", RandomNumberService, LifeCycle.Singleton)

    const scopedContainer1 = scopedContainerBuilder.build()
    const scopedContainer2 = scopedContainerBuilder.build()

    // Act
    const a1 = scopedContainer1.get<RandomNumberService>("A")
    const b1 = await scopedContainer1.getAsync<RandomNumberService>("B")
    const c1 = scopedContainer1.get<RandomNumberService>("C")
    const d1 = scopedContainer1.get<RandomNumberService>("D")
    const e1 = await scopedContainer1.getAsync<RandomNumberService>("E")
    const f1 = scopedContainer1.get<RandomNumberService>("F")

    const a2 = scopedContainer2.get<RandomNumberService>("A")
    const b2 = await scopedContainer2.getAsync<RandomNumberService>("B")
    const c2 = scopedContainer2.get<RandomNumberService>("C")
    const d2 = scopedContainer2.get<RandomNumberService>("D")
    const e2 = await scopedContainer2.getAsync<RandomNumberService>("E")
    const f2 = scopedContainer2.get<RandomNumberService>("F")

    // Assert
    expect(a1.n).not.toBe(a2.n)
    expect(b1.n).not.toBe(b2.n)
    expect(c1.n).not.toBe(c2.n)

    expect(d1.n).toBe(d2.n)
    expect(e1.n).toBe(e2.n)
    expect(f1.n).toBe(f2.n)
})

it('should throw when service is not found', async function () {
    // Arrange
    const container = createContainerBuilder().build()

    // Act
    const shouldThrow1 = () => container.get("hello")
    const rejection = container.getAsync("Hello")


    // Assert
    expect(shouldThrow1).toThrow('No service matching key "hello" found.')
    await expect(rejection).rejects.toThrow('No service matching key "Hello" found.')
})
