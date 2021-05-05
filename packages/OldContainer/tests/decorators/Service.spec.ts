import 'reflect-metadata'
import {Service} from '../../src/decorators/Service'
import {SERVICE_TOKEN_METADATA} from '../../src'

describe('#Service', () => {
    it('defines constructor metadata', () => {
        @Service('my service')
        class MyService {}

        expect(Reflect.getMetadata(SERVICE_TOKEN_METADATA, MyService)).toBe('my service')
    })
})
