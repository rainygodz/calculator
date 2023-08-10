function add(operand1, operand2) {
  return operand1 + operand2;
}


function subtract(operand1, operand2) {
  return operand1 - operand2;
}


function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

let operand1, operator, operand2;

function operate(operator, operand1, operand2) {
  switch (operator) {
    case '+':
      return add(operand1, operand2);
    case '-':
      return subtract(operand1, operand2);
    case '*':
      return multiply(operand1, operand2);
    case '/':
      return divide(operand1, operand2);
  }
}


function updateDisplay(event) {
  if (event.target.id === "C") {
    return;
  }
  display.textContent += event.target.id;
}


const display = document.querySelector(".display-content");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", updateDisplay);
});

const realButton = document.querySelector("button");
realButton.addEventListener("click", updateDisplay);