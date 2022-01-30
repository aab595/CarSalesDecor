import { IRental } from "../interface/IRental";

export abstract class RentalDecorator implements IRental {
    constructor(private _rental: IRental) {}

    getPrice(): number {
        return this._rental.getPrice()
    }
}