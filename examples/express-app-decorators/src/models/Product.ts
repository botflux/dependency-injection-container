export class Product {
    private _price: number
    private _name: string

    constructor(price: number, name: string) {
        this._price = price
        this._name = name
    }

    get price(): number {
        return this._price
    }

    set price(value: number) {
        this._price = value
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }
}
