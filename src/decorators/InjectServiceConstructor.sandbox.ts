import "reflect-metadata"
import {IServiceContainer} from '../IServiceContainer'
import {ServiceContainer} from '../ServiceContainer'
import {DeclareService} from './DeclareService'
import {InjectServiceConstructor} from './InjectServiceConstructor'
import {FillConstructor} from './FillConstructor'

const container: IServiceContainer = new ServiceContainer()
    .add('message', () => 'hello world')

@DeclareService(container, 'service1')
class Service1 {}

//@FillConstructor(container)
@DeclareService(container, 'service2')
class Service2 {
    public readonly _service1: Service1

    constructor(
        @InjectServiceConstructor(container, 'service1') service1: Service1,
        @InjectServiceConstructor(container, 'message') message: string
    ) {
        this._service1 = service1
        console.log(service1, message, 'constructor')
    }
}



