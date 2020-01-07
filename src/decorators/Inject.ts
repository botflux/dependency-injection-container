export function Inject(serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const injectionTokens = Reflect.getOwnMetadata('helloKey', target) || {}
        injectionTokens[parameterIndex] = serviceName
        Reflect.defineMetadata('helloKey', injectionTokens, target)
    }
}
