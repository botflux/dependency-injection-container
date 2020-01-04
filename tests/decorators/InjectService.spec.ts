import {ServiceContainer} from '../../src/ServiceContainer'
import {InjectService} from '../../src/decorators/InjectService'



describe('#InjectService', () => {
    it('injects the service', () => {
        const c = new ServiceContainer()
            .add('service1', () => 'hello world')

        class Service2 {
            @InjectService(c, 'service1')
            public service1: string = ''
        }

        // InjectService(c, 'service1')(Service2, 'service1')

        expect(new Service2().service1).toBe('hello world')
    })

    it('replaces the service by the passed one', () => {
        const c = new ServiceContainer()
            .add('service1', () => 'hello world')

        class Service2 {
            @InjectService(c, 'service1')
            public service1: string = ''
        }

        const s2 = new Service2()

        s2.service1 = 'not hello world'

        expect(s2.service1).toBe('not hello world')
    })
})
