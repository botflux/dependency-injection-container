import 'reflect-metadata'
import {ServiceContainer} from '../../src'
import {Inject} from '../../src/decorators/Inject'

describe('#InjectServiceConstructor', () => {
    it('adds metadata to the constructor parameter', () => {

        const container = new ServiceContainer()
            .addFactory('message', () => 'hello world')

        class MyService {
            constructor(@Inject('message') message: string) {
                const tokens = Reflect.getOwnMetadata('helloKey', MyService) || {}
                expect(tokens[0]).toBe('message')
            }
        }

        new MyService('hello world')
    })
})
