import {IServiceContainerFactoryOptions} from '../index'
import {IServiceContainerOptions} from '../IServiceContainerOptions'

export interface IOptionMapper {
    toContainerOptions (options: IServiceContainerFactoryOptions): IServiceContainerOptions
}
