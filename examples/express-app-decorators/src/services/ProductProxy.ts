import {Product} from '../models/Product'
import {ILogger} from './Logger'
import {Inject} from '../../../../src'

export interface IProductProxy {
    findAll(): Product[]
}

export class ProductProxy implements IProductProxy {
    private readonly _logger: ILogger

    constructor(@Inject('logger') logger: ILogger) {
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
