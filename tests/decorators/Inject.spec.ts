import 'reflect-metadata'
import {Inject} from '../..'
import {INJECT_TOKEN_METADATA} from '../..'

describe('#InjectServiceConstructor', () => {
    it('adds metadata to the constructor parameter', () => {
        class MyService {
            constructor(@Inject('message') message: string) {
                const tokens = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, MyService) || {}
                expect(tokens[0]).toBe('message')
            }
        }

        new MyService('hello world')
    })
})
