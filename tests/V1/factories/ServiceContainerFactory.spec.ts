import 'reflect-metadata'
import {ServiceContainerFactory} from '../../../src/V1'
import {ReflectServiceContainer} from '../../../src/V1'
import {ServiceContainer} from '../../../src/V1'

describe('#ServiceContainerFactory', () => {
    it('creates an instance of ReflectServiceContainer', () => {
        const f = new ServiceContainerFactory({
            useReflection: true
        })

        expect(f.create()).toBeInstanceOf(ReflectServiceContainer)
    })

    it('creates an instance of ServiceContainer', () => {
        const f = new ServiceContainerFactory({
            useReflection: false
        })

        expect(f.create()).toBeInstanceOf(ServiceContainer)
    })
})
