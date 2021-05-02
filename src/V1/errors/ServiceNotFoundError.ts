/**
 * The service container has no service matching a given key.
 */
export class ServiceNotFoundError extends Error {
    constructor(key: string, ...args: any[]) {
        super(...args)
        this.message = `Service named ${key} doesn't exist. Have you registered a service with "${key}" as key ?`
        this.name = 'ServiceNotFoundError'
    }
}
