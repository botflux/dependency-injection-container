import {IServiceContainer} from '../IServiceContainer'

// The only way to inject using a param decorator is to mark metadata via the parameter decorator.
// And to use the DeclareService decorator to resolve the marked parameters.

export function InjectServiceConstructor(container: IServiceContainer, serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        console.log(target, propertyKey, parameterIndex)

        const injectionToken = Reflect.getOwnMetadata('my_key', target) || {}

        injectionToken[parameterIndex] = serviceName

        Reflect.defineMetadata('my_key', injectionToken, target)
    }
}
