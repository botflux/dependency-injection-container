import {ServiceContainer} from '..'

describe('#ServiceContainer', () => {
    it('adds a new service', () => {
        const container: ServiceContainer = new ServiceContainer()
            .addFactory('my service', () => ({ hello: 'world' }))

        expect(container.services).toEqual({
            'my service': {
                hello: 'world'
            }
        })
    })

    it('throws a service already exists when service key already taken', () => {
        const container: ServiceContainer = new ServiceContainer()
            .addFactory('service.logger.someLogger', () => ({ log: () => ({}) }))

        const invalidCall = () => container.addFactory('service.logger.someLogger', () => ({}))

        // It seems that typescript doesn't create custom error
        expect(invalidCall).toThrowError(Error)
    })

    it('returns a service', () => {
        const container = new ServiceContainer()
            .addFactory('service', () => ({ hello: 'world' }))

        expect(container.get('service')).toEqual({
            hello: 'world'
        })
    })

    it('throws a service not found error if the key is not defined', () => {
        const container = new ServiceContainer()
            .addFactory('service', () => ({ hello: 'world' }))

        const invalidCall = () => container.addFactory('service', () => ({}))

        expect(invalidCall).toThrowError(Error)
    })

    it('returns the same instance when calling add', () => {
        const container = new ServiceContainer()
        const sameContainer = container.addFactory('hello', () => ({}))

        expect(sameContainer).toBe(container)
    })

    it('throws a service already registered if the key is already defined (addConstructor)', () => {
        const container = new ServiceContainer()
            .addFactory('hello', () => 'world')

        class Service {}

        const invalidCall = () => container.add('hello', Service)
        expect(invalidCall).toThrowError(Error)
    })

    it('adds a service (addConstructor)', () => {
        const container = new ServiceContainer()

        class Service {
            public hello: string = 'world'
        }

        const s = container
            .add('s', Service)
            .get<Service>('s')

        expect(s).toEqual({
            hello: 'world'
        })
    })

    it('throws when deleting is not defined service', () => {
        const c = new ServiceContainer()
        const invalidCall = () => c.delete('service')

        expect(invalidCall).toThrowError(Error)
    })

    it('deletes services', () => {
        const c = new ServiceContainer()
            .addFactory('hello', () => 'world')
            .delete('hello')

        expect(c.services).toEqual({})
    })
})
