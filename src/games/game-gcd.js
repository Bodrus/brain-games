import { beginGame, getRandom } from '..';

const calculatingCommonDivisor = (max, min) => {
  if (max % min === 0) {
    return `${min}`;
  }

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return `${i}`;
    }
  }
  return `${1}`;
};

const gcd = (a, b) => {
  let max = a;
  let min = b;

  if (a < b) {
    max = b;
    min = a;
  }
  if (a > b) {
    max = a;
    min = b;
  }

  return calculatingCommonDivisor(max, min);
};


const getTask = () => {
  const firstNamber = getRandom(2, 50);
  const secondNamber = getRandom(2, 50);
  const question = `${firstNamber} ${secondNamber}`;
  const result = gcd(firstNamber, secondNamber);
  return [question, result];
};


const getRules = () => console.log('Find the greatest common divisor of given numbers.');
const wrongAnswer = name => console.log(`wrong answer. Let's try again, ${name}`);

const begin = () => {
  beginGame(getRules, getTask, wrongAnswer);
};

export default begin;
