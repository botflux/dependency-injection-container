import {ServiceContainer} from '../../src/ServiceContainer'
import {DeclareService} from '../../src/decorators/DeclareService'
import {IServiceContainer} from '../../src/IServiceContainer'

class DummyService {
    public readonly serviceContainer: IServiceContainer
    public message?: string

    constructor(serviceContainer: IServiceContainer, message?: string) {
        this.serviceContainer = serviceContainer
        this.message = message
    }
}

describe('#DeclareService', () => {
    it('adds service to container', () => {
        const c = new ServiceContainer()

        // decorate the class
        DeclareService(c, 'service')(DummyService)

        expect(c.container).toEqual({
            service: expect.objectContaining({
                serviceContainer: c
            })
        })
    })

    it ('uses a custom factory', () => {
        const c = new ServiceContainer()

        DeclareService(c, 'service', c => new DummyService(c, 'hello world') )(DummyService)

        expect(c.container).toEqual({
            service: expect.objectContaining({
                serviceContainer: c,
                message: 'hello world'
            })
        })
    })
})
