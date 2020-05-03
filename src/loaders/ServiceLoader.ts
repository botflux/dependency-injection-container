import {IServiceLoader} from './IServiceLoader'
import {IServiceContainer} from '../IServiceContainer'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {Constructor} from '../Constructor'

export type ImportService<T> = { name: string, service: T }

export class ServiceLoader implements IServiceLoader {
    private readonly _serviceConstructors: ImportService<Constructor>[]
    private readonly _serviceFactories: ImportService<IServiceFactoryFunction>[]

    constructor(serviceConstructors: ImportService<Constructor>[], serviceFactories: ImportService<IServiceFactoryFunction>[]) {
        this._serviceConstructors = serviceConstructors
        this._serviceFactories = serviceFactories
    }

    load(container: IServiceContainer): void {
        this._serviceConstructors.forEach(_import => {
            container.add(_import.name, _import.service)
        })

        this._serviceFactories.forEach(_import => {
            container.addFactory(_import.name, _import.service)
        })
    }
}
