"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The service container has no service matching a given key.
 */
class ServiceNotFoundError extends Error {
    constructor(key, ...args) {
        super(...args);
        this.message = `Service named ${key} doesn't exist`;
        this.name = 'ServiceNotFoundError';
    }
}
exports.ServiceNotFoundError = ServiceNotFoundError;
//# sourceMappingURL=ServiceNotFoundError.js.map