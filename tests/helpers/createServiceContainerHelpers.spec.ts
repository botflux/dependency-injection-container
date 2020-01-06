import 'reflect-metadata'
import {ServiceContainer} from '../../src/ServiceContainer'
import {createServiceContainerHelpers} from '../../src/helpers/createServiceContainerHelpers'

describe('#createServiceContainerHelpers', () => {
    it('binds decorators to the passed container', () => {
        const c = new ServiceContainer()
        const { InjectCons, InjectProp, Service } = createServiceContainerHelpers(c)

        @Service('service1')
        class Service1 {}

        expect(c.container).toEqual({
            service1: new Service1()
        })

        c.add('hello', () => 'world')

        @Service('service2')
        class Service2 {
            public s1: Service1

            @InjectProp('hello')
            public hello?: string

            constructor( @InjectCons('service1') s1: Service1 ) {
                this.s1 = s1
            }
        }

        expect(c.get<Service2>('service2').s1).toBe(c.get<Service1>('service1'))
        expect(c.get<Service2>('service2').hello).toBe('world')
    })

    it('returns the same container', () => {
        const c = new ServiceContainer()
        const { container } = createServiceContainerHelpers(c)

        expect(container).toBe(c)
    })
})
