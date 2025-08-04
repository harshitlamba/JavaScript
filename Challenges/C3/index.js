let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let operationEl = document.getElementById("operation-el")

function add() {
    result = num1 + num2;
    document.getElementById("operation-el").textContent = "Sum: " + result;
}

function subtract() {
    result = num1 - num2;
    operationEl.textContent = "Sum: " + result;
}

function subtract() {
    result = num1 - num2;
    operationEl.textContent = "Sum: " + result;
}

function divide() {
    result = num1 / num2;
    operationEl.textContent = "Division: " + result;
}

function multiply() {
    result = num1 * num2;
    operationEl.textContent = "Multiplication: " + result;
}

document.getElementById("operation-el").textContent = "Sum: ";