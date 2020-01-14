// You should import one time reflect metadata before everything
import 'reflect-metadata'
import {IServiceContainerFactory, ServiceContainerFactory, Inject, IServiceContainer} from '@botflux/dependency-injection-container'

/**
 * We create a new factory. Produced IServiceContainer instances will be able to use reflection.
 */
const serviceContainerFactory: IServiceContainerFactory = new ServiceContainerFactory({
    useReflection: true
})

/**
 * We create the service container.
 */
const container: IServiceContainer = serviceContainerFactory.create()

class Logger {
    private path: string

    constructor(@Inject('options.logger') options: { path: string }) {
        this.path = options.path
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
