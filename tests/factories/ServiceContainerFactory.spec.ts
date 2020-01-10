import 'reflect-metadata'
import {ServiceContainerFactory} from '../..'
import {ReflectServiceContainer} from '../..'
import {ServiceContainer} from '../..'

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
