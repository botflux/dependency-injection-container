import 'reflect-metadata'
import {ReflectServiceContainer, ServiceContainer} from '../../src'
import {ServiceLoader} from '../../src/loaders/ServiceLoader'
import {Service} from '../../src/decorators/Service'
import {ReflectServiceLoader} from '../../src/loaders/ReflectServiceLoader'

describe('#ReflectServiceLoader', function () {
    it('loads service', function () {
        const reflectServiceContainer = new ReflectServiceContainer({
            allowServiceOverride: false
        })

        const plainServiceContainer = new ServiceContainer({
            allowServiceOverride: false
        })

        @Service('service1')
        class Service1 {}

        @Service('service2')
        class Service2 {}

        @Service('service3')
        class Service3 {}

        const factory1 = () => {}
        const factory2 = () => {}
        const factory3 = () => {}

        const loader = new ReflectServiceLoader([ Service1, Service2, Service3 ], [
            { name: 'factory1', service: factory1 },
            { name: 'factory2', service: factory2 },
            { name: 'factory3', service: factory3 },
        ])

        reflectServiceContainer.add = jest.fn(() => reflectServiceContainer)
        reflectServiceContainer.addFactory = jest.fn(() => reflectServiceContainer)

        loader.load(reflectServiceContainer)

        expect(reflectServiceContainer.add).toBeCalledTimes(3)
        expect(reflectServiceContainer.addFactory).toBeCalledTimes(3)

        // @ts-ignore
        expect(reflectServiceContainer.add.mock.calls[0]).toEqual([ 'service1', Service1 ])

        // @ts-ignore
        expect(reflectServiceContainer.add.mock.calls[1]).toEqual([ 'service2', Service2 ])

        // @ts-ignore
        expect(reflectServiceContainer.add.mock.calls[2]).toEqual([ 'service3', Service3 ])

        // @ts-ignore
        expect(reflectServiceContainer.addFactory.mock.calls[0]).toEqual([ 'factory1', factory1 ])

        // @ts-ignore
        expect(reflectServiceContainer.addFactory.mock.calls[1]).toEqual([ 'factory2', factory2 ])

        // @ts-ignore
        expect(reflectServiceContainer.addFactory.mock.calls[2]).toEqual([ 'factory3', factory3 ])

        plainServiceContainer.add = jest.fn(() => plainServiceContainer)
        plainServiceContainer.addFactory = jest.fn(() => plainServiceContainer)

        loader.load(plainServiceContainer)

        expect(plainServiceContainer.add).toBeCalledTimes(3)
        expect(plainServiceContainer.addFactory).toBeCalledTimes(3)

        // @ts-ignore
        expect(plainServiceContainer.add.mock.calls[0]).toEqual([ 'service1', Service1 ])

        // @ts-ignore
        expect(plainServiceContainer.add.mock.calls[1]).toEqual([ 'service2', Service2 ])

        // @ts-ignore
        expect(plainServiceContainer.add.mock.calls[2]).toEqual([ 'service3', Service3 ])

        // @ts-ignore
        expect(plainServiceContainer.addFactory.mock.calls[0]).toEqual([ 'factory1', factory1 ])

        // @ts-ignore
        expect(plainServiceContainer.addFactory.mock.calls[1]).toEqual([ 'factory2', factory2 ])

        // @ts-ignore
        expect(plainServiceContainer.addFactory.mock.calls[2]).toEqual([ 'factory3', factory3 ])
    })

    it('throws when no service was defined', () => {
        const plainServiceContainer = new ServiceContainer()

        @Service('myService')
        class MyService {}

        // No service decorator
        class AnotherService {}

        const reflectServiceLoader = new ReflectServiceLoader([ MyService, AnotherService ], [])

        const invalidCall = () => reflectServiceLoader.load(plainServiceContainer)

        expect(invalidCall).toThrowError(expect.objectContaining({
            message: 'No service name found',
            name: 'ServiceNameNotFoundError'
        }))
    })
})
