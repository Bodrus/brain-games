import { beginGame, getRandom } from '..';

const isEven = num => (num % 2 === 0);

const getTask = () => {
  const randomNamber = getRandom(2, 30);
  const question = `${randomNamber}`;
  const result = isEven(randomNamber) === true ? 'yes' : 'no';
  return [question, result];
};

const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const wrongAnswer = name => `'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}`;

const begin = () => {
  beginGame(getRules, getTask, wrongAnswer);
};

export default begin;
