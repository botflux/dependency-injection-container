import {IServiceContainerFactoryOptions} from '..'
import {IServiceContainerOptions} from '../IServiceContainerOptions'

export interface IOptionMapper {
    toContainerOptions (options: IServiceContainerFactoryOptions): IServiceContainerOptions
}
