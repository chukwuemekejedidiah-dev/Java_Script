const prompt = require("prompt-sync")();

let binary = prompt("Enter a binary number: ");

let decimal = 0;
let power = 1; // start from rightmost digit (1, 2, 4...)

for (let i = binary.length - 1; i >= 0; i--) {
    decimal += Number(binary[i]) * power;
    power *= 2; // next power of 2
}

console.log("Decimal equivalent:", decimal);