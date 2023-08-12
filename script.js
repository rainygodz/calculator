const display = document.querySelector(".display-content");
const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector("#C");
const backspaceButton = document.querySelector("#backspace");
const decimalButton = document.querySelector("#decimal");
const realButton = document.querySelector("button");
const equalsButton = document.querySelector("#equals");
let canInsertSign = false;
let displayContent = "";
let operand1, operator, operand2;


function add(operand1, operand2) {
  return Math.round((operand1 + operand2) * 10000) / 10000;
}


function subtract(operand1, operand2) {
  return Math.round((operand1 - operand2) * 10000) / 10000;
}


function multiply(operand1, operand2) {
  return Math.round((operand1 * operand2) * 10000) / 10000;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    return "Error";
  }
  return Math.round((operand1 / operand2) * 10000) / 10000;
}


function operate(operator, operand1, operand2) {
  if (isNaN(operand1)) {
    operand1 = 0;
  }
  if (isNaN(operand2)) {
    operand2 = 0;
  }

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
      if (canInsertSign) {
        display.textContent += " + ";
        canInsertSign = false;
      }
      break;
    case "subtract":
      if (canInsertSign) {
        display.textContent += " - ";
        canInsertSign = false;
      }
      break;
    case "multiply":
      if (canInsertSign) {
        display.textContent += " × ";
        canInsertSign = false;
      }
      break;
    case "divide":
      if (canInsertSign) {
        display.textContent += " ÷ ";
        canInsertSign = false;
      }
      break;
    case "equals":
      display.textContent += "";
      canInsertSign = true;
      break;
    case "C":
      display.textContent += "";
      canInsertSign = false;
      break;
    case "backspace":
      display.textContent += "";
      canInsertSign = true;
      break;
    case "decimal":
      if (canInsertSign) {
        display.textContent += ".";
        canInsertSign = false;
      }
      break;
    default:
      display.textContent += event.target.id;
      canInsertSign = true;
      break;
  }
}


function evaluate() {
  const expression = display.textContent;
  const expressionParts = expression.split(" ");
  let result = 0;

  do {
    operand1 = parseFloat(expressionParts[0]);
    operator = expressionParts[1];
    operand2 = parseFloat(expressionParts[2]);
    expressionParts.shift();
    expressionParts.shift();
    expressionParts.shift();
    result = operate(operator, operand1, operand2);
    expressionParts.unshift(result);
  } while (expressionParts.length !== 1);

  display.textContent = result;
}


function clear() {
  display.textContent = "";
  operand1 = 0;
  operand2 = 0;
  operator = "";
}


function backspace() {
  const displayContent = display.textContent;
  display.textContent = displayContent.slice(0, displayContent.length - 1);
}


buttons.forEach(button => {
  button.addEventListener("click", updateDisplay);
});

realButton.addEventListener("click", updateDisplay);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
backspaceButton.addEventListener("click", backspace);