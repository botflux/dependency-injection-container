import 'reflect-metadata'

import {ServiceContainer} from '../ServiceContainer'
import {DeclareService} from './DeclareService'
import {InjectServiceProperty} from './InjectServiceProperty'
import {InjectServiceConstructor} from './InjectServiceConstructor'

const container = new ServiceContainer()
    .add('config', () => 'hello world')
const Service = DeclareService.bind(undefined, container)
const Inject = InjectServiceConstructor.bind(undefined, container)

@Service('service1')
class Service1 {
    constructor() {}
}

@Service('service2')
class Service2 {
    public service1: Service1

    constructor(@Inject('service1') service1: Service1) {
        this.service1 = service1
    }
}

const s2 = container.get<Service2>('service2')
console.log(s2)

//
// @Service('service1')
// class Service1 {
//     constructor() {
//
//     }
// }
//
// class Service2 {
//     @Inject('service1')
//     public s1?: Service1
// }
//
// console.log(new Service2().s1)
