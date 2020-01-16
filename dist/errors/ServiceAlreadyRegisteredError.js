"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceAlreadyRegisteredError extends Error {
    constructor(key, ...args) {
        super(...args);
        this.message = `Service ${key} is already registered`;
        this.name = 'ServiceAlreadyRegisteredError';
    }
}
exports.ServiceAlreadyRegisteredError = ServiceAlreadyRegisteredError;
