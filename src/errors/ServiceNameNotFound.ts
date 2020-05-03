export class ServiceNameNotFound extends Error {
    constructor(...args: any[]) {
        super(...args)
        this.message = `No service name found`
        this.name = 'ServiceNotFoundError'
    }
}
