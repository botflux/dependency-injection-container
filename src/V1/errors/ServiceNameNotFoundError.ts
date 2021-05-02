/**
 * The service name is not found.
 */
export class ServiceNameNotFoundError extends Error {
    constructor(className: string, ...args: any[]) {
        super(...args)
        this.message = `No service name found for class named "${className}". Have you decorate ${className} with @Service(serviceName) ?`
        this.name = 'ServiceNameNotFoundError'
    }
}
