// let firstName = "Emma";
// let lastName = "Johnson";
// let yearOfBirth = 1990;
// let currentYear = new Date().getFullYear();
// let age = currentYear - yearOfBirth;

// console.log("First Name: " + firstName);
// console.log("Last Name: " + lastName);
// console.log("Age: " + age);


// let studentName = "Emma Johnson";
// let marks = 45;
// let attendance = 80;    

// if (marks >= 40 && attendance >= 75) {
//     console.log(studentName + " passes the exam");
// } else if (marks >= 40 && attendance < 75) {
//     console.log(studentName + " fails  due to low attendance");
// } else if (marks < 40) {
//     console.log(studentName + " fails due to low marks");
// }


// Calculate the largest of three numbers
// let num1 = 25;
// let num2 = 42;
// let num3 = 17
// let largest;
// if (num1 >= num2 && num1 >= num3) {
//     largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// } else {
//     largest = num3;
// } 
// console.log("The largest number is: " + largest);



// Check if a number is even or odd
// let number = 29;
// if (number % 2 === 0) {
//     console.log(number + " is even");
// }
// else {
//     console.log(number + " is odd");
// }




// Check if a year is a leap year
// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year");
// } else {
//     console.log(year + " is not a leap year");
// }



// Check if a character is a vowel or consonant
// let char = 'E';
// char = char.toLowerCase();
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log(char + " is a vowel");
// } else {
//     console.log(char + " is a consonant");
// }

// Find the factorial of a number
// let num = 5;
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log("The factorial of " + num + " is " + factorial);



// Generate Fibonacci series up to n terms
// let n = 7;
// let fibSeries = [0, 1];
// for (let i = 2; i < n; i++) {
//     fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
// }
// console.log("Fibonacci series up to " + n + " terms: " + fibSeries.slice(0, n).join(", "));



// Check if a number is prime
// let num = 29;
// let isPrime = true;
// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " is not a prime number");
// }


// fizzbuzz code
// let number = 1;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//     console.log("Fizz");
// } else if (number % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(number);
// }

// Simple store receipt system
// Fixed rates
// const DISCOUNT_RATE = 0.10;
// const TAX_RATE = 0.08;

// // User input
// const itemName = prompt("Enter item name:");
// const price = parseFloat(prompt("Enter price of one item:"));
// const quantity = parseInt(prompt("Enter quantity purchased:"));

// // Calculations
// const subtotal = price * quantity;
// const discount = subtotal * DISCOUNT_RATE;
// const priceAfterDiscount = subtotal - discount;
// const tax = priceAfterDiscount * TAX_RATE;
// const finalTotal = priceAfterDiscount + tax;

// Display receipt
// console.log("===== RECEIPT =====");
// console.log("Item:", itemName);
// console.log("Price per item: $" + price.toFixed(2));
// console.log("Quantity:", quantity);

// console.log("\nSubtotal: $" + subtotal.toFixed(2));
// console.log("Discount (10%): -$" + discount.toFixed(2));
// console.log("Price after discount: $" + priceAfterDiscount.toFixed(2));
// console.log("Tax (8%): +$" + tax.toFixed(2));
// console.log("Final Total: $" + finalTotal.toFixed(2));
// console.log("===================");


// Area and Circumference of a Circle
// let radius = 7;
// const PI = 3.14;
// let area = PI * radius * radius;
// let circumference = 2 * PI * radius;
// console.log("Area of the circle: " + area);
// console.log("Circumference of the circle: " + circumference);



// Area and Circumference of a Circle using Diameter
// let daimeter = 14;
// const PI = 3.14;
// let radius = daimeter / 2;
// let area = PI * radius * radius;
// let circumference = 2 * PI * radius;
// console.log("Area of the circle: " + area);
// console.log("Circumference of the circle: " + circumference);

// Simple store receipt system
// let price = 200;
// let quantity = 3;
// let discount = 0.05; // 5% discount
// let taxRate = 0.1; // 10% tax

// let subtotal = price * quantity;
// let discountAmount = subtotal * discount;
// let priceAfterDiscount = subtotal - discountAmount; 
// let tax = priceAfterDiscount * taxRate;
// let finalTotal = priceAfterDiscount + tax;
// console.log("===== RECEIPT =====");
// console.log("Price per item: N" + price.toFixed(2));
// console.log("Quantity: " + quantity);
// console.log("Subtotal: " + subtotal.toFixed(2));
// console.log("Discount: -N" + discountAmount.toFixed(2));
// console.log("Price after discount: N" + priceAfterDiscount.toFixed(2));
// console.log("Tax: +N" + tax.toFixed(2));
// console.log("Final Total: N" + finalTotal.toFixed(2));


// let totalMinutes = 350;
// let hours = totalMinutes / 60;
// let minutes = totalMinutes % 60;
// console.log(totalMinutes + " minutes is equal to " + Math.floor(hours) + " hours and " + minutes + " minutes.");




// Swapping the values of two variables
// let firstNumber = 5;
// let secondNumber = 10;
// console.log("Before swapping: firstNumber = " + firstNumber + ", secondNumber = " + secondNumber);

// let thirdNumber = firstNumber;
// firstNumber = secondNumber;
// secondNumber = thirdNumber;
// console.log("After swapping: firstNumber = " + firstNumber + ", secondNumber = " + secondNumber);



// Swapping the values without using a third variable
// let num1 = 10;
// let num2 = 5;
// console.log("Before swapping: num1 = " + num1 + ", num2 = " + num2);
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log("After swapping: num1 = " + num1 + ", num2 = " + num2);

// Declaring variables of different data types
// let num = 3;
// string = "Hello";
// Boolean = true;
// undefinedVariable = undefined;
// BigInt = 1234567890123456789012345678901234567890n;
// symbol = Symbol("description");
// nullVariable = null;

// // Displaying the types of the variables
// console.log("3 " + typeof num);
// console.log("Hello:" + typeof string);
// console.log("true: " + typeof Boolean);
// console.log("undefinedVariable: " + typeof undefinedVariable);
// console.log("1234567890123456789012345678901234567890n: " + typeof BigInt);
// console.log("Symbol: " + typeof symbol);
// console.log("nullVariable: " + typeof nullVariable);


// string = "10";
// num = 5;
// console.log("Before addition: string = " + string + ", num = " + num);
// let result = string + num;
// console.log("After addition: result = " + result);
// // The result will be "105" because the number 5 is coerced into a string and concatenated with "10".
// Number("10") + num;
// console.log("After addition with type conversion: result = " + (Number(string) + num));


