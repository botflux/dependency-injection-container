"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceAlreadyRegisteredError_1 = require("./errors/ServiceAlreadyRegisteredError");
const ServiceNotFoundError_1 = require("./errors/ServiceNotFoundError");
/**
 * An implementation of ServiceContainer.
 * If you want to use @Inject decorator, you should use ReflectServiceContainer class.
 *
 * ```typescript
 * class Logger {}
 * class Db {
 *     constructor(container: IServiceContainer) {
 *         container.get<Logger>('logger')
 *         container.get<{ dbUser: string, dbPass: string }>('options')
 *     }
 * }
 *
 * const container = new ReflectServiceContainer()
 *      .addFactory('config', () => ({ dbUser: 'user', dbPass: 'pass' })
 *      .add('logger', Logger)
 *      .add('db', Db)
 *
 * const logger = container.get<Logger>('logger')
 * const db = container.get<Db>('db')
 *
 * // You can also delete services.
 * container.delete('db', Db)
 * ```
 */
class ServiceContainer {
    constructor() {
        this._services = {};
    }
    /**
     * Add a new service using service's constructor.
     *
     * @param key
     * @param constructor
     *
     * @throws ServiceAlreadyRegisteredError
     */
    add(key, constructor) {
        this.addFactory(key, c => new constructor(c));
        return this;
    }
    /**
     * Add a new service using a service factory function.
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
     * Return the service inner container.
     * You should use this only for test purposes.
     */
    get services() {
        return this._services;
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
}
exports.ServiceContainer = ServiceContainer;
