export class ServiceAlreadyRegisteredError extends Error {
    constructor(key: string, ...args: any[]) {
        super(...args)
        this.message = `Service ${key} is already registered. If you want to add service multiple times under the same name, you should set allowServiceOverride in createServiceFactory options`
        this.name = 'ServiceAlreadyRegisteredError'
    }
}
