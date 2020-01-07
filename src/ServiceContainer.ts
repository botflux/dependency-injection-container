import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceContainerDictionary} from './ServiceContainerDictionary'
import {ServiceAlreadyRegisteredError, ServiceNotFoundError} from './errors'

export class ServiceContainer implements IServiceContainer {
    private _services: ServiceContainerDictionary = {}

    add(key: string, constructor: { new(...args: any[]): any }): this {
        this.addFactory(key, c => new constructor(c))

        return this
    }

    addFactory(key: string, factory: IServiceFactoryFunction): this {
        if (key in this._services) {
            throw new ServiceAlreadyRegisteredError(key)
        }

        this._services[key] = factory(this)

        return this
    }

    get<T>(key: string): T {
        if (!(key in this._services)) {
            throw new ServiceNotFoundError(key)
        }

        return this._services[key] as T
    }

    get services () {
        return this._services
    }
}
