import 'reflect-metadata'
import {ReflectServiceContainer} from '..'
import {Inject} from '..'

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
})
