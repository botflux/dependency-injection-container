import 'reflect-metadata'

import {ServiceContainer} from '../ServiceContainer'
import {DeclareService} from './DeclareService'
import {InjectService} from './InjectService'

const container = new ServiceContainer()
const Service = DeclareService.bind(undefined, container)
const Inject = InjectService.bind(undefined, container)

@Service('service1')
class Service1 {
    constructor() {

    }
}

class Service2 {
    @Inject('service1')
    public s1?: Service1
}

console.log(new Service2().s1)
