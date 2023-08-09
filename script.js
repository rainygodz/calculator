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

console.log(operate('+', 15, 5));
console.log(operate('-', 15, 5));
console.log(operate('*', 15, 5));
console.log(operate('/', 15, 5));