const {createServiceContainer} = require('@botflx/dependency-injection-container/dist')

const container = createServiceContainer()

class Logger {
    constructor(container) {
        this.path = container.get('options.logger').path
    }

    log(message) {
        console.log(`From logger: ${message} (${this.path})`)
    }
}

const logger = container
    .addFactory('options.logger', () => ({ path: '../app.log' }))
    .add('logger', Logger)
    .get('logger')

logger.log('hello world')
