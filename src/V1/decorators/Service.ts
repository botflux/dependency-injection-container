import {SERVICE_TOKEN_METADATA} from '../Constants'

export function Service(serviceName: string) {
    return function<T extends { new(...args: any[] ): {} }> (constructor: T) {
        // @ts-ignore
        Reflect.defineMetadata(SERVICE_TOKEN_METADATA, serviceName, constructor)
    }
}
