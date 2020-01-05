import {IServiceContainer} from '../IServiceContainer'
import {INJECTION_KEY} from './Constants'

// The only way to inject using a param decorator is to mark metadata via the parameter decorator.
// And to use the DeclareService decorator to resolve the marked parameters.

/**
 * Mark a parameter as dependency.
 *
 * @param container
 * @param serviceName
 * @constructor
 */
export function InjectServiceConstructor(container: IServiceContainer, serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const injectionTokens = Reflect.getOwnMetadata(INJECTION_KEY, target) || {}
        injectionTokens[parameterIndex] = serviceName
        Reflect.defineMetadata(INJECTION_KEY, injectionTokens, target)
    }
}
