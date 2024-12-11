var x = 1
var x = 2

console.log(x) //doesn't throw any errors on same variable initialization which is not preferred

// let y = 1
// let y = 2

// console.log(y) //Throws errors that the variable has already been declared

let z = 1
z = 2

console.log(z) //This works since we are not declaring the variable again, just assigning a new value to the variable

const newVariable = 10
newVariable = 32

console.log(newVariable) //throws error for reassignment to a const variable
//this is ideal for most use cases in JS