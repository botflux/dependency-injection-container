import 'reflect-metadata'
import {INJECTION_KEY, InjectServiceConstructor, ServiceContainer} from '../../src'

describe('#InjectServiceConstructor', () => {
    it('adds metadata to the constructor parameter', () => {

        const container = new ServiceContainer()
            .add('message', () => 'hello world')

        class MyService {
            constructor(@InjectServiceConstructor('message') message: string) {
                const tokens = Reflect.getOwnMetadata(INJECTION_KEY, MyService) || {}
                expect(tokens[0]).toBe('message')
            }
        }

        new MyService('hello world')
    })
})
