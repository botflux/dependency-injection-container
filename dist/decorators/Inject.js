"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
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
function Inject(serviceName) {
    return function (target, propertyKey, parameterIndex) {
        // @ts-ignore
        const injectionTokens = Reflect.getOwnMetadata(Constants_1.INJECT_TOKEN_METADATA, target) || {};
        injectionTokens[parameterIndex] = serviceName;
        // @ts-ignore
        Reflect.defineMetadata(Constants_1.INJECT_TOKEN_METADATA, injectionTokens, target);
    };
}
exports.Inject = Inject;
//# sourceMappingURL=Inject.js.map