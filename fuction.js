const prompt = require('prompt-sync')();

function countDigits() {
    let input = prompt("Enter an integer: ");
    let count = 0;

    if (!isNaN(input) && Number.isInteger(Number(input))) {

        let numStr = input.toString();
        count = numStr.length;

        if (numStr[0] === '-') { 
            count -= 1;
        }

        console.log("The number of digits in the input is: " + count);
    } else {
        console.log("Please enter a valid integer.");
    }
}

countDigits(); 