import 'reflect-metadata'
import {Service} from '../../../src/V1/decorators/Service'
import {SERVICE_TOKEN_METADATA} from '../../../src/V1'

describe('#Service', () => {
    it('defines constructor metadata', () => {
        @Service('my service')
        class MyService {}

        expect(Reflect.getMetadata(SERVICE_TOKEN_METADATA, MyService)).toBe('my service')
    })
})
