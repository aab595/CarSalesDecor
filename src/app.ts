import { CarType, Rental } from "./classes/rental";
import { RentalWithDriver } from "./classes/rentalWithDriver";


const rental = new Rental(CarType.Berline)

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

const addCarBtn  = document.querySelector('#add-cars-btn') as HTMLButtonElement;
const totalPrice = document.querySelector('#total-price') as HTMLSpanElement;

let countNbBerline   = 0
let countNbCoupe     = 0
let countNbFamiliale = 0
let priceCalculator  = {berline: 0, coupe: 0, familiale: 0}
let priceCalculatorB = 0
let priceCalculatorC = 0
let priceCalculatorF = 0

// button allowing to reduce the number of car
berlineBtnMinus.addEventListener('click', () => {
    if (berlineNb.innerText !== '0') {
        countNbBerline -= 1
        berlineNb.innerText = countNbBerline.toString()
        rental.setType(CarType.Berline)
        priceCalculatorB -= rental.getPrice()
        console.log(priceCalculatorB);
    }
})
// button allowing to increase the number of car
berlineBtnPlus.addEventListener('click', (e: Event) => {
    countNbBerline += 1
    berlineNb.innerText = countNbBerline.toString()
    rental.setType(CarType.Berline)
    priceCalculatorB += rental.getPrice()
    console.log(priceCalculatorB);
})
// button allowing to rent cars
berlineRental.addEventListener('click', () => {
    const rental = new Rental(CarType.Berline)
    // first we check if user choose at least one car
    if (countNbBerline > 0) {
        rental.setType(CarType.Berline)
        if (berlineDriver.checked) {
            const rentalWithDriver = new RentalWithDriver(rental)
            priceCalculatorB = rentalWithDriver.getPrice() * countNbBerline
        } else {
            priceCalculatorB = rental.getPrice() * countNbBerline
        }
        priceCalculator.berline = priceCalculatorB
    }
})

// button allowing to reduce the number of car
coupeBtnMinus.addEventListener('click', (e: Event) => {
    if (coupeNb.innerText !== '0') {
        countNbCoupe -= 1
        coupeNb.innerText = countNbCoupe.toString()
        rental.setType(CarType.Coupé)
        priceCalculatorC -= rental.getPrice()
        console.log(priceCalculatorC);
    }
})
// button allowing to increase the number of car
coupeBtnPlus.addEventListener('click', (e: Event) => {
    countNbCoupe += 1
    coupeNb.innerText = countNbCoupe.toString()
    rental.setType(CarType.Coupé)
    priceCalculatorC += rental.getPrice()
    console.log(priceCalculatorC);
})
// button allowing to rent cars
coupeRental.addEventListener('click', (e: Event) => {
    // first we check if user choose at least one car
    if (countNbCoupe > 0) {
        rental.setType(CarType.Coupé)
        if (coupeDriver.checked) {
            const rentalWithDriver = new RentalWithDriver(rental)
            priceCalculatorC = rentalWithDriver.getPrice() * countNbCoupe
        } else {
            priceCalculatorC = rental.getPrice() * countNbCoupe
        }
        priceCalculator.coupe = priceCalculatorC
    }
})

// button allowing to reduce the number of car
familialeBtnMinus.addEventListener('click', (e: Event) => {
    if (familialeNb.innerText !== '0') {
        countNbFamiliale -= 1
        familialeNb.innerText = countNbFamiliale.toString()
        rental.setType(CarType.Familiale)
        priceCalculatorF -= rental.getPrice()
        console.log(priceCalculatorF);
    }
})
// button allowing to increase the number of car
familialeBtnPlus.addEventListener('click', (e: Event) => {
    countNbFamiliale += 1
    familialeNb.innerText = countNbFamiliale.toString()
    rental.setType(CarType.Familiale)
    priceCalculatorF += rental.getPrice()
    console.log(priceCalculatorF);
})
// button allowing to rent cars
familialeRental.addEventListener('click', (e: Event) => {
    // first we check if user choose at least one car
    if (countNbFamiliale > 0) {
        rental.setType(CarType.Familiale)
        if (familialeDriver.checked) {
            const rentalWithDriver = new RentalWithDriver(rental)
            priceCalculatorF = rentalWithDriver.getPrice() * countNbFamiliale
        } else {
            priceCalculatorF = rental.getPrice() * countNbFamiliale
        }
        priceCalculator.familiale = priceCalculatorF
    }
})

addCarBtn.addEventListener('click', () => {
    let sum = 0
    for (const key in priceCalculator) {
        sum += priceCalculator[key]
    }
    totalPrice.innerText = sum.toString()
})