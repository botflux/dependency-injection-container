import {INJECT_TOKEN_METADATA} from '../Constants'

export function Inject(serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        // @ts-ignore
        const injectionTokens = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, target) || {}
        injectionTokens[parameterIndex] = serviceName
        // @ts-ignore
        Reflect.defineMetadata(INJECT_TOKEN_METADATA, injectionTokens, target)
    }
}
