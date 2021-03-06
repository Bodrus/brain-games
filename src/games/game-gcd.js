import { beginGame, getRandom } from '..';


const gcd = (num1, num2) => {
  const max = num1 < num2 ? num2 : num1;
  const min = num1 < num2 ? num1 : num2;

  if (max % min === 0) {
    return min;
  }
  return gcd(min, max % min);
};

const getTask = () => {
  const firstNumber = getRandom(2, 50);
  const secondNumber = getRandom(2, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const result = gcd(firstNumber, secondNumber);
  return [question, `${result}`];
};

const getRules = () => 'Find the greatest common divisor of given numbers.';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
