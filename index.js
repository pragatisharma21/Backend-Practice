// create basic calculator with add and subtract function,
// accept a,b return a (operation) b
const fs = require("fs")
const isOdd = require("is-odd")
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
console.log(isOdd(2))
