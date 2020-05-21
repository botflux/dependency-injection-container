import 'reflect-metadata'
import {createServiceContainer, Inject} from '../src'
import {createPlainServiceLoader} from '../src/factories/createPlainServiceLoader'
import {createReflectServiceLoader} from '../src/factories/createReflectServiceLoader'
import {Service} from '../src/decorators/Service'

it('should work', function () {
    const container = createServiceContainer({
        useReflection: false,
        serviceLoader: createPlainServiceLoader([], [])
    })
})

it('should work 2', function () {

    @Service('myService')
    class MyService {
        constructor(
            @Inject('myFactory') hello: string
        ) {
            console.log(hello)
        }
    }

    const loader = createReflectServiceLoader([ MyService ], [])

    const container = createServiceContainer({
        useReflection: true,
        serviceLoader: loader
    })

    container.addFactory('myFactory', () => 'hello world')
})
