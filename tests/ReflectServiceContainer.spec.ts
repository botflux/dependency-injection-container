import 'reflect-metadata'
import {INJECT_TOKEN_METADATA, ReflectServiceContainer} from '../src'
import {Inject} from '../src'

describe('#ReflectServiceContainer', () => {
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

    it('adds a factory', () => {
        const c = new ReflectServiceContainer()
        const service = c
            .addFactory('config', container => () => container)
            .get<Function>('config')

        expect(service()).toBe(c)
    })

    it('returns a service', () => {
        const c = new ReflectServiceContainer()
            .addFactory('config', () => 'world')

        expect(c.get<string>('config')).toBe('world')
    })

    it('throws when service already defined', () => {
        const c = new ReflectServiceContainer()
            .addFactory('service', () => 'world')

        const invalidCall = () => c.addFactory('service', () => 'hello')

        expect(invalidCall).toThrowError(Error)
    })

    it('throws when service is not defined', () => {
        const c = new ReflectServiceContainer()

        const invalidCall = () => c.get<Function>('service')
        expect(invalidCall).toThrowError(Error)
    })

    it('throws when deleting is not defined service', () => {
        const c = new ReflectServiceContainer()
        const invalidCall = () => c.delete('service')

        expect(invalidCall).toThrowError(Error)
    })

    it('deletes services', () => {
        const c = new ReflectServiceContainer()
            .addFactory('hello', () => 'world')
            .delete('hello')

        expect(c.services).toEqual({})
    })
})
