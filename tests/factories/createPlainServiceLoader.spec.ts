import {createPlainServiceLoader} from '../../src/factories/createPlainServiceLoader'
import {ServiceLoader} from '../../src/loaders/ServiceLoader'

describe('#createPlainServiceLoader', function () {
    it('returns a plain service container', () => {
        const loader = createPlainServiceLoader([], [])
        expect(loader instanceof ServiceLoader).toBe(true)
    })
})
