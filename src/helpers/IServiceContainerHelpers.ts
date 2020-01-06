import {IServiceContainer} from '../IServiceContainer'
import {IBoundDeclareService} from './IBoundDeclareService'
import {IBoundInjectServiceProperty} from './IBoundInjectServiceProperty'
import {IBoundInjectServiceConstructor} from './IBoundInjectServiceConstructor'

export interface IServiceContainerHelpers {
    container: IServiceContainer,
    Service: IBoundDeclareService,
    InjectProp: IBoundInjectServiceProperty,
    InjectCons: IBoundInjectServiceConstructor
}
