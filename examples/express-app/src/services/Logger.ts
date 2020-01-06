import {helpers} from '../../container'

export interface ILogger {
    log(message: string): this
}

@helpers.Service('logger')
export class Logger implements ILogger {
    log(message: string): this {
        console.log('Logger: ' + message)
        return this
    }
}
