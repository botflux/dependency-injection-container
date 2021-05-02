import {createPlainServiceLoader} from '../../../src/V1/factories/createPlainServiceLoader'
import {ServiceLoader} from '../../../src/V1/loaders/ServiceLoader'

describe('#createPlainServiceLoader', function () {
    it('returns a plain service container', () => {
        const loader = createPlainServiceLoader([], [])
        expect(loader instanceof ServiceLoader).toBe(true)
    })
})
