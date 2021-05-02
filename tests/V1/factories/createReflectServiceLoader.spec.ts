import {createReflectServiceLoader} from '../../../src/V1/factories/createReflectServiceLoader'
import {ReflectServiceLoader} from '../../../src/V1/loaders/ReflectServiceLoader'

describe('#createReflectServiceLoader', function () {
    it('returns a reflect service loader', function () {
        const loader = createReflectServiceLoader([], [])
        expect(loader instanceof ReflectServiceLoader).toBe(true)
    })
})
