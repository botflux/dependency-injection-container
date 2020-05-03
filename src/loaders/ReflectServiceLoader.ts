import {IServiceLoader} from './IServiceLoader'
import {IServiceContainer} from '../IServiceContainer'
import {Constructor} from '../Constructor'
import {ImportService} from './ServiceLoader'
import {IServiceFactoryFunction} from '../IServiceFactoryFunction'
import {SERVICE_TOKEN_METADATA} from '../Constants'
import {ServiceNameNotFound} from '../errors/ServiceNameNotFound'

export class ReflectServiceLoader implements IServiceLoader {

    private readonly _serviceConstructor: Constructor[]
    private readonly _serviceFactories: ImportService<IServiceFactoryFunction>[]

    constructor(serviceConstructor: Constructor[], serviceFactories: ImportService<IServiceFactoryFunction>[]) {
        this._serviceConstructor = serviceConstructor
        this._serviceFactories = serviceFactories
    }

    load(container: IServiceContainer): void {
        this._serviceConstructor.forEach(constructor => {
            const serviceName = ReflectServiceLoader.getServiceName(constructor)
            container.add(serviceName, constructor)
        })

        this._serviceFactories.forEach(_import => {
            container.addFactory(_import.name, _import.service)
        })
    }

    private static getServiceName (constructor: Constructor): string {
        // @ts-ignore
        const serviceName: string | undefined = Reflect.getOwnMetadata(SERVICE_TOKEN_METADATA, constructor)

        if (!serviceName) {
            throw new ServiceNameNotFound()
        }

        return serviceName
    }
}
