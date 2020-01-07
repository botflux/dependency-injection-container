import {IServiceContainer} from './IServiceContainer'
import {IServiceFactoryFunction} from './IServiceFactoryFunction'
import {ServiceContainerDictionary} from './ServiceContainerDictionary'
import {ServiceAlreadyRegisteredError, ServiceNotFoundError} from './errors'

/**
 * An implementation of ServiceContainer that uses Reflection.
 */
export class ReflectServiceContainer implements IServiceContainer {
    private _services: ServiceContainerDictionary = {}

    add(key: string, constructor: { new(...args: any[]): any }): this {
        // @ts-ignore
        const injectionTokens: { [key: string]: string } = Reflect.getOwnMetadata('helloKey', constructor) || {}
        const injectionTokensKeys = Object.keys(injectionTokens)

        const factory = (container: IServiceContainer) => new constructor(...injectionTokensKeys.map(key => {
            return container.get(injectionTokens[key])
        }))

        return this.addFactory(key, factory)
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

}
