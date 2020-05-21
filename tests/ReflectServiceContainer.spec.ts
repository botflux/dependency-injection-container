import 'reflect-metadata'
import {
    INJECT_TOKEN_METADATA,
    IServiceContainer,
    ReflectServiceContainer,
    ServiceAlreadyRegisteredError,
    ServiceNotFoundError
} from '../src'
import {Inject} from '../src'

describe('#ReflectServiceContainer', () => {

    describe('#add', () => {
        it('adds a constructor', () => {
            class Service {
                public hello: string = 'world'
                public readonly message: string

                constructor(@Inject('message') message: string) {
                    this.message = message
                }
            }

            const service = new ReflectServiceContainer()
                .addFactory('message', () => 'hello')
                .add('service', Service)
                .get<Service>('service')

            expect(service).toEqual({
                hello: 'world',
                message: 'hello'
            })
        })

        it('passes no argument when no metadata found', () => {
            class Service {
                public hello: string = 'hello'
                public message: string

                constructor() {
                    this.message = 'world'
                }
            }

            const service = new ReflectServiceContainer()
                .add('service', Service)
                .get<Service>('service')

            // We ensure that metadata are undefined
            expect(Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, Service)).toBe(undefined)

            expect(service).toEqual({
                hello: 'hello',
                message: 'world'
            })
        })
    })

    describe('#addFactory', () => {
        it('adds a factory', () => {
            const c = new ReflectServiceContainer()
            const service = c
                .addFactory('config', container => () => container)
                .get<Function>('config')

            expect(service()).toBe(c)
        })

        it('throws when service already defined', () => {
            const c = new ReflectServiceContainer()
                .addFactory('service', () => 'world')

            const invalidCall = () => c.addFactory('service', () => 'hello')

            expect(invalidCall).toThrowError(ServiceAlreadyRegisteredError)
        })

        it('does not throw when service already defined if allowServiceOverride is true', () => {
            const c = new ReflectServiceContainer({ allowServiceOverride: true })
                .addFactory('service', () => 'world')

            const invalidCall = () => c.addFactory('service', () => 'hello')

            expect(invalidCall).not.toThrowError(ServiceAlreadyRegisteredError)
            expect(invalidCall).not.toThrowError(Error)
        })
    })

    describe('#get', () => {

        it('returns a service', () => {
            const c = new ReflectServiceContainer()
                .addFactory('config', () => 'world')

            expect(c.get<string>('config')).toBe('world')
        })

        it('throws when service is not defined', () => {
            const c = new ReflectServiceContainer()

            const invalidCall = () => c.get<Function>('service')
            expect(invalidCall).toThrowError(ServiceNotFoundError)
        })
    })

    describe('#delete', () => {
        it('throws when deleting is not defined service', () => {
            const c = new ReflectServiceContainer()
            const invalidCall = () => c.delete('service')

            expect(invalidCall).toThrowError(ServiceNotFoundError)
        })

        it('deletes services', () => {
            const c = new ReflectServiceContainer()
                .addFactory('hello', () => 'world')

            c.get('hello')
            c.delete('hello')

            expect(c.services).toEqual({})
            expect(c.factories).toEqual({})

            c.addFactory('hello', () => 'world')
            c.delete('hello')
            expect(c.factories).toEqual({})
        })
    })

    describe('#resolve', () => {
        it('resolves the given service', () => {
            const container = new ReflectServiceContainer()

            class Service {
                constructor(@Inject('connectionString') public connectionString: string) {}
            }

            const service: Service = container
                .addFactory('connectionString', () => 'hello')
                .resolve(Service)

            expect(service.connectionString).toBe('hello')
        })

        it('does not add the resolved service to the container', () => {
            const container = new ReflectServiceContainer()

            class Service {
                constructor() {}
            }

            container.resolve(Service)

            expect(Object.keys(container.services).length).toBe(0)
        })
    })

    describe('#resolveFactory', () => {

        it('resolves the given factory', () => {
            const factory = (container: IServiceContainer) => `Hello ${container.get<string>('world')}`

            const container = new ReflectServiceContainer()
                .addFactory('world', () => 'world')

            expect(container.resolveFactory<string>(factory)).toBe('Hello world')
        })

        it('does not add the resolved factory to the container', () => {
            const factory = (container: IServiceContainer) => `Hello ${container.get<string>('world')}`

            const container = new ReflectServiceContainer()
                .addFactory('world', () => 'world')

            container.resolveFactory(factory)

            expect(Object.keys(container.services).length).toBe(1)
        })
    })
})
