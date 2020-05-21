import {IServiceContainer, ServiceAlreadyRegisteredError, ServiceContainer, ServiceNotFoundError} from '../src'

describe('#ServiceContainer', () => {

    describe('#addFactory', () => {

        it('adds a new service', () => {
            const factory = () => ({ hello: 'world' })

            const container: ServiceContainer = new ServiceContainer()
                .addFactory('my service', factory)

            expect(container.factories).toEqual({
                'my service': factory
            })

            expect(container.services).toEqual({})

            container.get<{ hello: string }> ('my service')

            expect(container.services).toEqual({
                'my service': {
                    hello: 'world'
                }
            })
        })

        it('returns the same instance when calling add', () => {
            const container = new ServiceContainer()
            const sameContainer = container.addFactory('hello', () => ({}))

            expect(sameContainer).toBe(container)
        })

        it('throws a service already exists when service key already taken', () => {
            const container: ServiceContainer = new ServiceContainer()
                .addFactory('service.logger.someLogger', () => ({ log: () => ({}) }))

            const invalidCall = () => container.addFactory('service.logger.someLogger', () => ({}))

            // It seems that typescript doesn't create custom error
            expect(invalidCall).toThrowError(ServiceAlreadyRegisteredError)
        })

        it('does not throw a service not found error if allowServiceOverride is true', () => {
            const container = new ServiceContainer({ allowServiceOverride: true })
                .addFactory('service', () => ({ hello: 'world' }))

            const invalidCall = () => container.addFactory('service', () => ({}))

            expect(invalidCall).not.toThrowError(ServiceAlreadyRegisteredError)
            expect(invalidCall).not.toThrowError(Error)
        })
    })

    describe('#get', () => {

        it('returns a service', () => {
            const container = new ServiceContainer()
                .addFactory('service', () => ({ hello: 'world' }))

            expect(container.get('service')).toEqual({
                hello: 'world'
            })
        })

        it('throws when get an undefined service', () => {
            const container = new ServiceContainer()

            const invalidCall = () => container.get('service')
            expect(invalidCall).toThrowError(ServiceNotFoundError)
        })
    })

    describe('#add', () => {
        it('throws a service already registered if the key is already defined (addConstructor)', () => {
            const container = new ServiceContainer()
                .addFactory('hello', () => 'world')

            class Service {}

            const invalidCall = () => container.add('hello', Service)
            expect(invalidCall).toThrowError(ServiceAlreadyRegisteredError)
        })

        it('does not throw a service already registered if allowServiceOverride is true (addConstructor)', () => {
            const container = new ServiceContainer({ allowServiceOverride: true })
                .addFactory('hello', () => 'world')

            class Service {}

            const invalidCall = () => container.add('hello', Service)
            expect(invalidCall).not.toThrowError(ServiceAlreadyRegisteredError)
            expect(invalidCall).not.toThrowError(Error)
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
    })

    describe('#delete', () => {
        it('throws when deleting is not defined service', () => {
            const c = new ServiceContainer()
            const invalidCall = () => c.delete('service')

            expect(invalidCall).toThrowError(ServiceNotFoundError)
        })

        it('deletes services', () => {
            const c = new ServiceContainer()
                .addFactory('hello', () => 'world')

            c.get('hello')
            c.delete('hello')

            expect(c.factories).toEqual({})
            expect(c.services).toEqual({})

            c.addFactory('hello', () => 'world')

            c.delete('hello')
            expect(c.factories).toEqual({})
        })
    })

    describe('#resolve', () => {

        it('resolves the given service', () => {
            const container = new ServiceContainer()

            class Service {
                constructor(public container: IServiceContainer) {}
            }

            const service: Service = container.resolve(Service)

            expect(service.container).toBe(container)
        })

        it('does not add the resolved service to the container', () => {
            const container = new ServiceContainer()

            class Service {
                constructor(public container: IServiceContainer) {}
            }

            container.resolve(Service)

            expect(Object.keys(container.services).length).toBe(0)
        })
    })

    describe('#resolveFactory', () => {
        it('resolves the given factory', () => {
            const factory = (container: IServiceContainer) => `Hello ${container.get<string>('world')}`

            const container = new ServiceContainer()
                .addFactory('world', () => 'world')

            expect(container.resolveFactory<string>(factory)).toBe('Hello world')
        })

        it('does not add the resolved factory to the container', () => {
            const factory = (container: IServiceContainer) => `Hello ${container.get<string>('world')}`

            const container = new ServiceContainer()
                .addFactory('world', () => 'world')

            container.resolveFactory(factory)

            expect(Object.keys(container.services).length).toBe(1)
        })
    })

})
