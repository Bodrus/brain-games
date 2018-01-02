import { beginGame, getRandom } from '..';


const calculatingCommonDivisor = (max, min) => {
  if (max % min === 0) {
    return min;
  }
  return calculatingCommonDivisor(min, max % min);
};

const gcd = (a, b) => {
  const max = a < b ? b : a;
  const min = a < b ? a : b;
  return calculatingCommonDivisor(max, min);
};


const getTask = () => {
  const firstNamber = getRandom(2, 50);
  const secondNamber = getRandom(2, 50);
  const question = `${firstNamber} ${secondNamber}`;
  const result = gcd(firstNamber, secondNamber);
  return [question, result];
};


const getRules = () => 'Find the greatest common divisor of given numbers.';
const wrongAnswer = name => `wrong answer. Let's try again, ${name}`;

const begin = () => {
  beginGame(getRules, getTask, wrongAnswer);
};

export default begin;
