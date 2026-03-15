const prompt = require('prompt-sync')();

function reverseNumber() {
    let input = prompt("Enter a 4-digit number: ");

    let new_number = input[3] + input[2] + input[1] + input[0];

    console.log("Your new number is " + new_number);
}

reverseNumber();
