import { IRental } from "../interface/IRental";

export enum CarType {
    Berline = 100,
    Coupé = 150,
    Familiale = 200
}

export class Rental implements IRental {
    private _price: number;

    constructor(private _type: CarType) {
        this._price = _type.valueOf()
    }

    setType(_newType: CarType) {
        this._type = _newType
    }

    getPrice(): number {
        return this._price
    }

    setPrice(_newPrice: number) {
        this._price = _newPrice
    }
}