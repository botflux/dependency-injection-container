"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceContainer_1 = require("../ServiceContainer");
const ReflectServiceContainer_1 = require("../ReflectServiceContainer");
/**
 * Default option of ServiceContainerFactory
 */
exports.defaultOptions = {
    useReflection: false
};
/**
 * Creates IServiceContainer instances.
 *
 * ```typescript
 * new ServiceContainerFactory()
 * new ServiceContainerFactory({
 *     useReflection: true
 * })
 * ```
 */
class ServiceContainerFactory {
    constructor(options = exports.defaultOptions) {
        this._options = options;
    }
    /**
     * Creates a new instance of IServiceContainer
     *
     * ```typescript
     * const container: IServiceContainer = new ServiceContainerFactory().create()
     * ```
     */
    create() {
        return this._options.useReflection
            ? new ReflectServiceContainer_1.ReflectServiceContainer()
            : new ServiceContainer_1.ServiceContainer();
    }
}
exports.ServiceContainerFactory = ServiceContainerFactory;
