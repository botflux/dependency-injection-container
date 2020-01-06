import {IServiceFactoryFunction} from '../IServiceFactoryFunction'

export interface IBoundDeclareService {
    // It seems that the official ClassDecorator has not the same signature as DeclareService class decorator
    // even if this signature comes from the docs.
    // https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
    (name: string, factory?: IServiceFactoryFunction): any
}
