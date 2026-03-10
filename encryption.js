const prompt = require("prompt-sync")();

let num = prompt("Enter a 4-digit number to encrypt: ");

// make sure it has 4 digits
if (num.length !== 4) {
    console.log("Error: Please enter exactly 4 digits.");
} else {
    // convert to array of digits
    let digits = num.split("").map(Number);

    // step 1: add 7 and take remainder modulo 10
    for (let i = 0; i < 4; i++) {
        digits[i] = (digits[i] + 7) % 10;
    }

    // step 2: swap first ↔ third, second ↔ fourth
    [digits[0], digits[2]] = [digits[2], digits[0]];
    [digits[1], digits[3]] = [digits[3], digits[1]];

    // step 3: print encrypted number
    console.log("Encrypted number:", digits.join(""));
}