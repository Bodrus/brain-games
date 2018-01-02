import { beginGame, getRandom } from '..';


const buildQuestion = num => `${num}`;

const getResult = num => (num % 2 === 0 ? 'yes' : 'no');


const getTask = () => {
  const randomNamber = getRandom(2, 30);
  const question = buildQuestion(randomNamber);
  const result = getResult(randomNamber);
  return [question, result];
};

const getRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

const wrongAnswer = name => console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}`);

const begin = () => {
  beginGame(getRules, getTask, wrongAnswer);
};

export default begin;
