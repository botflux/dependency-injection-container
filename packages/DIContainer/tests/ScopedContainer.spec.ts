import {createContainerBuilder} from '../src/Implementation/Container'
import {LifeCycle} from '../src/Interfaces'
import {createScopedContainerBuilder} from '../src/Implementation/ScopedContainer'

describe('#ScopedContainer', function () {
    describe('#ScopedContainer.has', function () {
        it('should return true when a service is in inner or in parent container', function () {
            // Arrange
            const parentContainer = createContainerBuilder()
                .addFactory('hello', () => 'world', LifeCycle.Singleton)
                .build()

            const scopedContainer = createScopedContainerBuilder(parentContainer)
                .addFactory('foo', () => 'bar', LifeCycle.Singleton)
                .build()

            // Act
            const hasFoo = scopedContainer.has("foo")
            const hasHello = scopedContainer.has('hello')
            const hasBar = scopedContainer.has('bar')

            // Assert
            expect(hasFoo).toBe(true)
            expect(hasHello).toBe(true)
            expect(hasBar).toBe(false)
        })
    })

    describe('#ScopedContainer.hasAsync', function () {
        it('should return true when a service is in inner or in parent container', function () {
            // Arrange
            const parentContainer = createContainerBuilder()
                .addAsyncFactory('hello', () => Promise.resolve("world"), LifeCycle.Singleton)
                .build()

            const scopedContainer = createScopedContainerBuilder(parentContainer)
                .addAsyncFactory('foo',  () => Promise.resolve("bar"), LifeCycle.Singleton)
                .build()

            // Act
            const hasFoo = scopedContainer.hasAsync('foo')
            const hasHello = scopedContainer.hasAsync('hello')
            const hasBar = scopedContainer.hasAsync('bar')

            // Assert
            expect(hasFoo).toBe(true)
            expect(hasHello).toBe(true)
            expect(hasBar).toBe(false)
        })
    })
})
