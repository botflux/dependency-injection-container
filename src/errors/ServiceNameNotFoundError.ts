/**
 * The service name is not found.
 */
export class ServiceNameNotFoundError extends Error {
    constructor(...args: any[]) {
        super(...args)
        this.message = `No service name found`
        this.name = 'ServiceNameNotFoundError'
    }
}
