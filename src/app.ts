import { CarType, Rental } from "./classes/rental";
import { RentalWithDriver } from "./classes/rentalWithDriver";


const rental = new Rental(CarType.Berline)
const rentalWithDriver = new RentalWithDriver(rental)

// DOM variables for Berline car
const berlineBtnMinus = document.querySelector('#berline-minus') as HTMLButtonElement;
const berlineBtnPlus  = document.querySelector('#berline-plus') as HTMLButtonElement;
const berlineNb       = document.querySelector('#berline-nb') as HTMLSpanElement;
const berlineRental   = document.querySelector('#berline-rental') as HTMLButtonElement;
const berlineDriver   = document.querySelector('#berline-driver') as HTMLInputElement;
const berlineDriverX  = document.querySelector('#berline-driver-x') as HTMLInputElement;

// DOM variables for Coupe car
const coupeBtnMinus = document.querySelector('#coupe-minus') as HTMLButtonElement;
const coupeBtnPlus  = document.querySelector('#coupe-plus') as HTMLButtonElement;
const coupeNb       = document.querySelector('#coupe-nb') as HTMLSpanElement;
const coupeRental   = document.querySelector('#coupe-rental') as HTMLButtonElement;
const coupeDriver   = document.querySelector('#coupe-driver') as HTMLInputElement;
const coupeDriverX  = document.querySelector('#coupe-driver-x') as HTMLInputElement;

// DOM variables for Familiale car
const familialeBtnMinus = document.querySelector('#familiale-minus') as HTMLButtonElement;
const familialeBtnPlus  = document.querySelector('#familiale-plus') as HTMLButtonElement;
const familialeNb       = document.querySelector('#familiale-nb') as HTMLSpanElement;
const familialeRental   = document.querySelector('#familiale-rental') as HTMLButtonElement;
const familialeDriver   = document.querySelector('#familiale-driver') as HTMLInputElement;
const familialeDriverX  = document.querySelector('#familiale-driver-x') as HTMLInputElement;

const totalPrice = document.querySelector('#total-price') as HTMLSpanElement;

let countNbBerline  = 0
let countNbCoupe    = 0
let priceCalculator = 0

// button allowing to reduce the number of car
berlineBtnMinus.addEventListener('click', (e: Event) => {
    if (berlineNb.innerText !== '0') {
        countNbBerline -= 1
        berlineNb.innerText = countNbBerline.toString()
        rental.setType(CarType.Berline)
        priceCalculator -= rental.getPrice()
    }
})
// button allowing to increase the number of car
berlineBtnPlus.addEventListener('click', (e: Event) => {
    countNbBerline += 1
    berlineNb.innerText = countNbBerline.toString()
    rental.setType(CarType.Berline)
    priceCalculator += rental.getPrice()
})
// button allowing to rent cars
berlineRental.addEventListener('click', (e: Event) => {
    // first we check if user choose at least one car
    if (countNbBerline > 0) {
        // we save the value of rental in based of choices
        let priceChecker = rentalWithDriver.getPrice() * countNbBerline
        if (berlineDriver.checked) {
            priceCalculator = priceChecker
        } 
        if (berlineDriverX.checked) {
            priceCalculator = priceChecker - (countNbBerline * 50)
        }
        totalPrice.innerText = priceCalculator.toString()
    }
})


// button allowing to reduce the number of car
coupeBtnMinus.addEventListener('click', (e: Event) => {
    if (coupeNb.innerText !== '0') {
        countNbCoupe -= 1
        coupeNb.innerText = countNbCoupe.toString()
        rental.setType(CarType.Coupé)
        priceCalculator -= rental.getPrice()
    }
})
// button allowing to increase the number of car
coupeBtnPlus.addEventListener('click', (e: Event) => {
    countNbCoupe += 1
    coupeNb.innerText = countNbCoupe.toString()
    rental.setType(CarType.Coupé)
    priceCalculator += rental.getPrice()
})
// button allowing to rent cars
coupeRental.addEventListener('click', (e: Event) => {
    // first we check if user choose at least one car
    if (countNbCoupe > 0) {
        // we save the value of rental in based of choices
        let priceChecker = rentalWithDriver.getPrice() * countNbCoupe
        if (coupeDriver.checked) {
            priceCalculator = priceChecker
        } 
        if (coupeDriverX.checked) {
            priceCalculator = priceChecker - (countNbCoupe * 50)
        }
        totalPrice.innerText = priceCalculator.toString()
    }
})