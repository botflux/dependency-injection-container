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
export declare function Inject(serviceName: string): (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
//# sourceMappingURL=Inject.d.ts.map