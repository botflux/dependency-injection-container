import 'reflect-metadata'
import {ReflectServiceContainer, ServiceContainer} from '../../src'
import {ServiceLoader} from '../../src/loaders/ServiceLoader'
import {Service} from '../../src/decorators/Service'
import {ReflectServiceLoader} from '../../src/loaders/ReflectServiceLoader'

describe('#ReflectServiceLoader', function () {
    it('loads service', function () {
        const serviceContainer = new ReflectServiceContainer({
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

        serviceContainer.add = jest.fn(() => serviceContainer)
        serviceContainer.addFactory = jest.fn(() => serviceContainer)

        loader.load(serviceContainer)

        expect(serviceContainer.add).toBeCalledTimes(3)
        expect(serviceContainer.addFactory).toBeCalledTimes(3)

        // @ts-ignore
        expect(serviceContainer.add.mock.calls[0]).toEqual([ 'service1', Service1 ])

        // @ts-ignore
        expect(serviceContainer.add.mock.calls[1]).toEqual([ 'service2', Service2 ])

        // @ts-ignore
        expect(serviceContainer.add.mock.calls[2]).toEqual([ 'service3', Service3 ])

        // @ts-ignore
        expect(serviceContainer.addFactory.mock.calls[0]).toEqual([ 'factory1', factory1 ])

        // @ts-ignore
        expect(serviceContainer.addFactory.mock.calls[1]).toEqual([ 'factory2', factory2 ])

        // @ts-ignore
        expect(serviceContainer.addFactory.mock.calls[2]).toEqual([ 'factory3', factory3 ])
    })
})
