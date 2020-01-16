"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceAlreadyRegisteredError_1 = require("./errors/ServiceAlreadyRegisteredError");
const ServiceNotFoundError_1 = require("./errors/ServiceNotFoundError");
const Constants_1 = require("./Constants");
/**
 * An implementation of ServiceContainer that uses Reflection.
 * With this implementation you are able to use the @Inject decorator.
 * Note: This implementation need reflection in order to work (e.g npm install reflect-metadata).
 *
 * ```typescript
 * class Logger {}
 * class Db {
 *     constructor(@Inject('logger') logger: Logger, @Inject('config') config: any) {}
 * }
 *
 * const container = new ReflectServiceContainer()
 *      .addFactory('config', () => ({ dbUser: 'user', dbPass: 'pass' })
 *      .add('logger', Logger)
 *      .add('db', Db)
 *
 * const logger = container.get<Logger>('logger')
 * const db = container.get<Db>('db')
 * ```
 */
class ReflectServiceContainer {
    constructor() {
        /**
         * Holds services instances
         */
        this._services = {};
    }
    /**
     * Add a new service using service's constructor
     *
     * @param key
     * @param constructor
     *
     * @throws ServiceAlreadyRegisteredError
     */
    add(key, constructor) {
        // @ts-ignore
        const injectionTokens = Reflect.getOwnMetadata(Constants_1.INJECT_TOKEN_METADATA, constructor) || {};
        const injectionTokensKeys = Object.keys(injectionTokens);
        const factory = (container) => new constructor(...injectionTokensKeys.map(key => {
            return container.get(injectionTokens[key]);
        }));
        return this.addFactory(key, factory);
    }
    /**
     * Add a new service using a service factory function
     *
     * @param key
     * @param factory
     *
     * @throws ServiceAlreadyRegisteredError
     */
    addFactory(key, factory) {
        if (key in this._services) {
            throw new ServiceAlreadyRegisteredError_1.ServiceAlreadyRegisteredError(key);
        }
        this._services[key] = factory(this);
        return this;
    }
    /**
     * Return the service matching the passed key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError
     */
    get(key) {
        if (!(key in this._services)) {
            throw new ServiceNotFoundError_1.ServiceNotFoundError(key);
        }
        return this._services[key];
    }
    /**
     * Delete the service matching the given key.
     *
     * @param key
     *
     * @throws ServiceNotFoundError Thrown when no service is matching the passed key.
     */
    delete(key) {
        if (!(key in this._services)) {
            throw new ServiceNotFoundError_1.ServiceNotFoundError(key);
        }
        delete this._services[key];
        return this;
    }
    /**
     * This getter must only be used for tests purposes.
     */
    get services() {
        return this._services;
    }
}
exports.ReflectServiceContainer = ReflectServiceContainer;
