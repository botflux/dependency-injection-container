import {IServiceContainerFactoryOptions} from '../index'
import {IServiceContainerOptions} from '../IServiceContainerOptions'
import {IOptionMapper} from './IOptionMapper'

export class OptionMapper implements IOptionMapper {
    toContainerOptions (options: IServiceContainerFactoryOptions): IServiceContainerOptions {
        return { allowServiceOverride: options.allowServiceOverride }
    }
}
