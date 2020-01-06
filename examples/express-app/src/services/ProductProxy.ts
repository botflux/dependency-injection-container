import {Product} from '../models/Product'
import {helpers} from '../../container'
import {ILogger} from './Logger'

export interface IProductProxy {
    findAll(): Product[]
}

@helpers.Service('productProxy')
export class ProductProxy implements IProductProxy {
    private readonly _logger: ILogger

    constructor(@helpers.InjectCons('logger') logger: ILogger) {
        this._logger = logger
    }

    findAll(): Product[] {
        this._logger.log('Find all products')
        return [
            new Product(Math.random() * 30, 'Chair'),
            new Product(Math.random() * 10, 'Ball'),
            new Product(Math.random() * 50, 'Table'),
        ]
    }
}
