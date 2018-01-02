import { beginGame, getRandom } from '..';

const buildQuestion = (firstNamber, secondNamber, operand) => `${firstNamber} ${operand} ${secondNamber}`;

const getOperand = () => {
  const counter = getRandom(0, 2);
  if (counter === 0) {
    return '+';
  }
  if (counter === 1) {
    return '-';
  }
  if (counter === 2) {
    return '*';
  }
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


export const getRules = () => console.log('What is the result of the expression?');
const wrongAnswer = name => console.log(`wrong answer. Let's try again, ${name}`);

const begin = () => {
  beginGame(getRules, getTask, wrongAnswer);
};

export default begin;
