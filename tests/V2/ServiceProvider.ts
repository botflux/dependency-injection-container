import {createContainerBuilder} from '../../src/V2/Implementation/Container'
import {LifeCycle} from '../../src/V2/Interfaces'
import {createAsyncServiceProvider} from '../../src/V2/Implementation/ServiceProvider'

describe('#AsyncServiceProvider', function () {
    it('should proxy inner container has method', function () {
        // Arrange
        const container = createContainerBuilder()
            .addAsyncFactory("hello", () => Promise.resolve("world"), LifeCycle.Transient)
            .addFactory("service", () => "service", LifeCycle.Transient)
            .build()

        const provider = createAsyncServiceProvider(container)

        // Act
        const hasHello = provider.hasAsync("hello")
        const hasService = provider.has("service")
        const hasFoo = provider.hasAsync("foo")
        const hasBar = provider.has("bar")

        // Assert
        expect(hasHello).toBe(true)
        expect(hasService).toBe(true)
        expect(hasFoo).toBe(false)
        expect(hasBar).toBe(false)
    })
})
