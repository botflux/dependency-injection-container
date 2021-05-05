import {ServiceContainer} from '../../src'
import {ServiceLoader} from '../../src/loaders/ServiceLoader'

describe('#ServiceLoader', function () {
    it('loads service', () => {
        const serviceContainer = new ServiceContainer({
            allowServiceOverride: false
        })

        class Service1 {}
        class Service2 {}
        class Service3 {}

        const factory1 = () => {}
        const factory2 = () => {}
        const factory3 = () => {}

        const loader = new ServiceLoader([
            { name: 'service1', service: Service1 },
            { name: 'service2', service: Service2 },
            { name: 'service3', service: Service3 },
        ], [
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
