
console.log(carTwo); //undefined because "var" is hoisted - meaning the variable is always initialized at the top of the scope with 'undefined' value
console.log(car); //Reference error because variables with "const" needs to be declared first
console.log(car); //Reference error because variables with "let" needs to be declared first

const carOne = "Mercedes";
var carTwo = "BMW";
let car = "porsche" //Reference error because variables with "let" needs to be declared first


