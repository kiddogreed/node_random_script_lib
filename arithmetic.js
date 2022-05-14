//basic calculator 
const cost = parseFloat(12.00) 
const tip = cost  * parseInt(20) / 100
const tax =  cost  * parseInt(8) /100 
const total = cost + tip +tax
console.log(cost);
console.log(tip);
console.log(tax);
console.log( Math.round(total.toFixed(2)));