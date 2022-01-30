import { RentalDecorator } from "./rentalDecor";

export class RentalWithDriver extends RentalDecorator {
    getPrice(): number {
        return super.getPrice() + 50
    }
}