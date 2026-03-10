const prompt = require("prompt-sync")();

let miles = prompt("Enter number of miles: ");

let gallon = prompt("Enter number of gallons: ");

let Result = miles / gallon;

console.log("Your average is "+ Result +  " miles per gallon");