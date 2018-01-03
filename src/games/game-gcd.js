import { beginGame, getRandom } from '..';


const gcd = (arr) => {
  const newArr = arr.sort((a, b) => a - b);
  const max = newArr[1];
  const min = newArr[0];

  if (max % min === 0) {
    return `${min}`;
  }
  return gcd([min, max % min]);
};

const getTask = () => {
  const firstNamber = getRandom(2, 50);
  const secondNamber = getRandom(2, 50);
  const question = `${firstNamber} ${secondNamber}`;
  const result = gcd([firstNamber, secondNamber]);
  return [question, result];
};

const getRules = () => 'Find the greatest common divisor of given numbers.';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
