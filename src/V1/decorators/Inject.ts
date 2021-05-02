import {INJECT_TOKEN_METADATA} from '../Constants'

/**
 * Adds metadata to the decorated parameter.
 * A IServiceContainer handling reflection will be able to use those metadata.
 *
 * ```typescript
 * class Logger {
 *     constructor(@Inject('message') message: string) {}
 * }
 *
 * const container = new ServiceContainerFactory({ useReflection: true })
 *      .create()
 *      .addFactory('message', () => 'hello world')
 *      .add('logger', Logger)
 * ```
 *
 * @param serviceName
 *
 * @constructor
 */
export function Inject(serviceName: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        // @ts-ignore
        const injectionTokens = Reflect.getOwnMetadata(INJECT_TOKEN_METADATA, target) || {}
        injectionTokens[parameterIndex] = serviceName
        // @ts-ignore
        Reflect.defineMetadata(INJECT_TOKEN_METADATA, injectionTokens, target)
    }
}
