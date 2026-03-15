function calculate(num1, num2, operation){
    return operation(num1, num2)
}

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

console.log(calculate(5,3,add))
console.log(calculate(5,3,subtract))
console.log(calculate(5,3,multiply))
console.log(calculate(6,3,divide))