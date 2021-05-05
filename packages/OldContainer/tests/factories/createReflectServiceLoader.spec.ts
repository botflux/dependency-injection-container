import {createReflectServiceLoader} from '../../src/factories/createReflectServiceLoader'
import {ReflectServiceLoader} from '../../src/loaders/ReflectServiceLoader'

describe('#createReflectServiceLoader', function () {
    it('returns a reflect service loader', function () {
        const loader = createReflectServiceLoader([], [])
        expect(loader instanceof ReflectServiceLoader).toBe(true)
    })
})
