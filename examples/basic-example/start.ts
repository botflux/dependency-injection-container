/**
 * We create ServiceContainerFactory that will create class implementing IServiceContainer.
 */
import {IServiceContainerFactory} from '../../src/factories/IServiceContainerFactory'
import {ServiceContainerFactory} from '../../src/factories/ServiceContainerFactory'
import {IServiceContainer} from '../../src/IServiceContainer'


const serviceContainerFactory: IServiceContainerFactory = new ServiceContainerFactory()

/**
 * We get a new instance of service container.
 */
const container: IServiceContainer = serviceContainerFactory.create()

class Logger {
    private path: string

    constructor(container: IServiceContainer) {
        this.path = container.get<{ path: string }>('options.logger').path
    }

    log(message: string) {
        console.log(`From logger: ${message} (${this.path})`)
    }
}

const logger: Logger = container
    .addFactory('options.logger', () => ({ path: 'var/app.log' }))
    .add('logger', Logger)
    .get<Logger>('logger')

logger.log('hello world') // From logger: hello world (var/app.log)
