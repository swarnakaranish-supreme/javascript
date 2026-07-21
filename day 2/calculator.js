// function calculator(a, b) {
//     console.log("Addition:", a + b);
//     console.log("Subtraction:", a - b);
//     console.log("Multiplication:", a * b);                 //withot comparing operator
//     console.log("Division:", a / b);
// }
// calculator(20, 5);

//with operator 
let num1 = 20;
let num2 = 10;
let operator = "+";   // +, -, *, /

if (operator === "+") {
    console.log("Addition =", num1 + num2);
}
else if (operator === "-") {
    console.log("Subtraction =", num1 - num2);
}
else if (operator === "*") {
    console.log("Multiplication =", num1 * num2);
}
else if (operator === "/") {
    if (num2 !== 0) {
        console.log("Division =", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
}
else {
    console.log("Invalid Operator");
}