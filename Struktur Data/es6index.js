import { coffeeStock, isCoffeeMachineReady } from './es6state.js';
 
const displayStock = stock => {
    for (const type in stock) { 
        console.log(type);
    }
}
 
displayStock(coffeeStock);
console.log(isCoffeeMachineReady);