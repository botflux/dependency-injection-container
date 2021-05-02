import {createServiceContainer, IServiceContainerFactoryOptions} from '../../../src/V1'

describe('#ServiceContainerFactory', function () {
    it('should throw when creating a container supporting reflection without importing reflect polyfill', function () {
        // Arrange
        const options: IServiceContainerFactoryOptions = { useReflection: true }

        // Act
        const shouldThrow = () => createServiceContainer(options)

        // Assert
        expect(shouldThrow).toThrow(`You can't create a container supporting decorators without the reflect-metadata polyfill included.`)
    })
})
