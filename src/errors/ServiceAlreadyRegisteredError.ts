namespace ServiceContainer.Errors {
    export class ServiceAlreadyRegisteredError extends Error {
        constructor(key: string, ...args: any[]) {
            super(...args)
            this.message = `Service ${key} is already registered`
            this.name = 'ServiceAlreadyRegisteredError'
        }
    }
}
