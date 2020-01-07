import 'reflect-metadata'
import {ServiceContainer} from '../../src'
import {Inject} from '../../src/decorators/Inject'
import {INJECT_TOKEN_METADATA} from '../../src/Constants'

describe('#InjectServiceConstructor', () => {
    it('adds metadata to the constructor parameter', () => {

        const container = new ServiceContainer()
            .addFactory('message', () => 'hello world')

        class MyService {
            constructor(@Inject('message') message: string) {
                const tokens = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, MyService) || {}
                expect(tokens[0]).toBe('message')
            }
        }

        new MyService('hello world')
    })
})
