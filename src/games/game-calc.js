import { beginGame, getRandom } from '..';

const buildQuestion = (firstNamber, secondNamber, operand) => `${firstNamber} ${operand} ${secondNamber}`;

const getOperand = () => {
  const counter = getRandom(0, 2);
  let operand;
  if (counter === 0) {
    operand = '+';
  }
  if (counter === 1) {
    operand = '-';
  }
  if (counter === 2) {
    operand = '*';
  }
  return operand;
};

const getResult = (num1, num2, operand) => {
  let result = '';
  if (operand === '+') {
    result = num1 + num2;
  }
  if (operand === '-') {
    result = num1 - num2;
  }
  if (operand === '*') {
    result = num1 * num2;
  }

  return `${result}`;
};

const getTask = () => {
  const firstNamber = getRandom(2, 20);
  const secondNamber = getRandom(2, 20);
  const operand = getOperand();
  const question = buildQuestion(firstNamber, secondNamber, operand);
  const result = getResult(firstNamber, secondNamber, operand);
  return [question, result];
};

const getRules = () => 'What is the result of the expression?';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
