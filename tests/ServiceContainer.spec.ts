import {ServiceContainer} from '../src/ServiceContainer'

describe('#ServiceContainer', () => {
    it('adds a new service', () => {
        const container: ServiceContainer = new ServiceContainer()
            .add('my service', () => ({ hello: 'world' }))

        expect(container.container).toEqual({
            'my service': {
                hello: 'world'
            }
        })
    })

    it('throws a service already exists when service key already taken', () => {
        const container: ServiceContainer = new ServiceContainer()
            .add('service.logger.someLogger', () => ({ log: () => ({}) }))

        const invalidCall = () => container.add('service.logger.someLogger', () => ({}))

        // It seems that typescript doesn't create custom error
        expect(invalidCall).toThrowError(Error)
    })

    it('returns a service', () => {
        const container = new ServiceContainer()
            .add('service', () => ({ hello: 'world' }))

        expect(container.get('service')).toEqual({
            hello: 'world'
        })
    })

    it('throws a service not found error if the key is not defined', () => {
        const container = new ServiceContainer()
            .add('service', () => ({ hello: 'world' }))

        const invalidCall = () => container.add('service', () => ({}))

        expect(invalidCall).toThrowError(Error)
    })

    it('returns the same instance when calling add', () => {
        const container = new ServiceContainer()
        const sameContainer = container.add('hello', () => ({}))

        expect(sameContainer).toBe(container)
    })
})
