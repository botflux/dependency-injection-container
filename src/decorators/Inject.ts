export function Inject(serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        // @ts-ignore
        const injectionTokens = Reflect.getOwnMetadata('helloKey', target) || {}
        injectionTokens[parameterIndex] = serviceName
        // @ts-ignore
        Reflect.defineMetadata('helloKey', injectionTokens, target)
    }
}
