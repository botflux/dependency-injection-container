import "reflect-metadata"
import {IServiceContainer} from '../IServiceContainer'
import {ServiceContainer} from '../ServiceContainer'
import {DeclareService} from './DeclareService'
import {InjectServiceConstructor} from './InjectServiceConstructor'

const container: IServiceContainer = new ServiceContainer()

@DeclareService(container, 'service1')
class Service1 {}

class Service2 {
    public readonly _service1: Service1

    constructor(@InjectServiceConstructor(container, 'service1') service1: Service1) {
        this._service1 = service1
    }
}

// @ts-ignore
new Service2()
