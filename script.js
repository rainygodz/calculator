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
    case '×':
      return multiply(operand1, operand2);
    case '÷':
      return divide(operand1, operand2);
  }
}


function updateDisplay(event) {

  switch(event.target.id) {
    case "add":
      display.textContent += " + ";
      break;
    case "subtract":
      display.textContent += " - ";
      break;
    case "multiply":
      display.textContent += " × ";
      break;
    case "divide":
      display.textContent += " ÷ ";
      break;
    case "equals":
      display.textContent += "";
      break;
    case "C":
      display.textContent += "";
      break;
    default:
      display.textContent += event.target.id;
      break;
  }
}


function evaluate() {
  const expression = display.textContent;
  const expressionParts = expression.split(" ");
  let result = 0;

  do {
    operand1 = parseInt(expressionParts[0]);
    operator = expressionParts[1];
    operand2 = parseInt(expressionParts[2]);
    expressionParts.shift();
    expressionParts.shift();
    expressionParts.shift();
    result = operate(operator, operand1, operand2);
    expressionParts.unshift(result);
  } while (expressionParts.length !== 1);

  display.textContent = Math.round(result * 1000) / 1000;
}


const display = document.querySelector(".display-content");
const buttons = document.querySelectorAll(".button");
let displayContent = "";

buttons.forEach(button => {
  button.addEventListener("click", updateDisplay);
});

const realButton = document.querySelector("button");
realButton.addEventListener("click", updateDisplay);


const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", evaluate);