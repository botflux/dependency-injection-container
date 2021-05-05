export interface ILogger {
    log(message: string): this
}

export class Logger implements ILogger {
    log(message: string): this {
        console.log('Logger: ' + message)
        return this
    }
}
