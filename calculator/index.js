const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorKeys = document.querySelector('.calculator-keys');

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
};

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = '';
  }
};

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = '';
};

calculatorKeys.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('number')) {
    inputNumber(target.value);
    updateScreen(currentInput);
    return;
  }

  if (target.classList.contains('operator')) {
    inputOperator(target.value);
    return;
  }

  if (target.classList.contains('equal-sign')) {
    calculate();
    updateScreen(currentInput);
    return;
  }

  if (target.classList.contains('all-clear')) {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
    updateScreen(currentInput);
    return;
  }
});
