import {createServiceContainer, ServiceContainerFactory} from '../../src'

describe('#createServiceContainer', () => {
    it('does same as ServiceContainerFactory', () => {
        const sa = createServiceContainer()
        const sb = new ServiceContainerFactory().create()

        expect(sa).toEqual(sb)

        const sc = createServiceContainer({ useReflection: true })
        const sd = new ServiceContainerFactory({ useReflection: true }).create()

        expect(sc).toEqual(sd)
    })
})
