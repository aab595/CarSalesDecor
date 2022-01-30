import { IRental } from "../interface/IRental";

export enum CarType {
    Berline = 100,
    Coupé = 150,
    Familiale = 200
}

export class Rental implements IRental {
    constructor(private _type: CarType) { }

    getPrice(): number {
        return this._type.valueOf()
    }

    setType(_newType: CarType) {
        this._type = _newType
    }
}
