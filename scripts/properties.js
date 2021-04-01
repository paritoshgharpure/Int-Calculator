var enteredNumber;
var result;
var operandOne = 0;
var operandTwo = 0;
var operator;
var calcString;
var isOperandOneFlag = false;
var isResultSet = false;

function calculate(operandOne, operator, operandTwo) {
  switch (operator) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    case '/':
      result = operandOne / operandTwo;
      break;
    default:
      alert('Select proper operator...');
  }
  calcResultLabel.textContent = result;
  operandOne = result;
  isOperandOneFlag = false;
}

function numberClicked(someNumber) {
  enteredNumber = someNumber;
  if (isOperandOneFlag == false) {
    if (operandOne == 0) {
      operandOne = parseInt(enteredNumber);
    } else {
      operandOne = parseInt(operandOne + '' + someNumber);
    }
    userInputLabel.textContent = operandOne;
  } else {
    if (operandTwo == 0) {
      operandTwo = parseInt(enteredNumber);
    } else {
      operandTwo = parseInt(operandTwo + '' + someNumber);
    }
    userInputLabel.textContent = generateCalcString(
      operandOne,
      operator,
      operandTwo
    );
  }
}

function operatorClicked(operatorSign) {
  if (!isResultSet) {
    isOperandOneFlag = true;
    isResultSet = true;
    operator = operatorSign;
    calcString = generateCalcString(operandOne, operator, operandTwo);
    userInputLabel.textContent = calcString;
  } else {
    isOperandOneFlag = true;
    operator = operatorSign;
    operandOne = result;
    operandTwo = 0;
    calcString = generateCalcString(operandOne, operator, operandTwo);
    userInputLabel.textContent = calcString;
  }
}

function generateCalcString(operandOne, operator, operandTwo) {
  return `${operandOne} ${operator} ${operandTwo}`;
}

function oneClicked() {
  numberClicked('1');
}

function twoClicked() {
  numberClicked('2');
}

function threeClicked() {
  numberClicked('3');
}

function fourClicked() {
  numberClicked('4');
}

function fiveClicked() {
  numberClicked('5');
}

function sixClicked() {
  numberClicked('6');
}

function sevenClicked() {
  numberClicked('7');
}
function eightClicked() {
  numberClicked('8');
}
function nineClicked() {
  numberClicked('9');
}
function zeroClicked() {
  numberClicked('0');
}

function plusClicked() {
  // isOperandOneFlag = true;
  // operator = '+';
  // calcString = `${operandOne} ${operator}`;
  // userInputLabel.textContent = calcString;
  operatorClicked('+');
}

function minusClicked() {
  operatorClicked('-');
}
function multiplyClicked() {
  operatorClicked('*');
}
function divideClicked() {
  operatorClicked('/');
}
function decimalClicked() {
  userInputLabel.textContent = '.';
}
function clearAllClicked() {
  operandOne = 0;
  operandTwo = 0;
  operator = '';
  userInputLabel.textContent = '0';
  calcResultLabel.textContent = '0';
  isOperandOneFlag = false;
  isResultSet = false;
}
function BackspaceClicked() {
  operandTwo = operandTwo / 10;
  userInputLabel.textContent = generateCalcString(
    operandOne,
    operator,
    operandTwo
  );
}

function equalToClicked() {
  if (operandOne == 0 || operandTwo == 0 || operator == '') {
    alert('Enter data first!');
  } else {
    calculate(operandOne, operator, operandTwo);
  }
}
