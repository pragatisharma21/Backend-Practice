// create basic calculator with add and subtract function,
// accept a,b return a (operation) b
// const fs = require("fs")
// const isOdd = require("is-odd")
// function add(a, b){
//     return a + b;
// }
// function subtract(a, b){
//     return a - b;
// }
// function multiply(a, b){
//     return a * b;
// }
// function divide(a, b){
//     return a / b;
// }
// // console.log(isOdd(2))
// console.log(process.argv
    
// )
// let args = process.argv;
// for( let i=2; i < args.length; i++){
//     console.log("hello to" ,args[i]);
// }
const figlet = require("figlet")
figlet("Pragati" , function(err, data){
    if(err){
        console.log("something went wrong");
        console.dir(err)
        return;
    }
    console.log(data)
});