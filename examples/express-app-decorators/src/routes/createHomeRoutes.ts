import {IServiceContainer} from 'dependency-injection-container'
import {Request, Response, Router} from 'express'
import {ILogger, IProductProxy} from '../services'

export function createHomeRoutes(container: IServiceContainer, router: Router = Router()): Router {
    const logger: ILogger = container.get<ILogger>('logger')
    const productProxy: IProductProxy = container.get<IProductProxy>('productProxy')

    router.get('/', (req: Request, res: Response) => {
        logger.log('Home routes index')
        res.json(productProxy.findAll())
    })

    return router
}
