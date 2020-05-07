import {createServiceContainer} from '../src'
import {createPlainServiceLoader} from '../src/factories/createPlainServiceLoader'

it('should work', function () {
    const container = createServiceContainer({
        useReflection: false,
        serviceLoader: createPlainServiceLoader([], [])
    })
})
