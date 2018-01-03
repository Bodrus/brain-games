import { beginGame, getRandom } from '..';


const makeTask = () => {
  const firstNum = getRandom(2, 20);
  const item = getRandom(2, 20);
  const arr = [];
  const indexErasedNumber = getRandom(2, 8);
  arr[0] = firstNum;

  let i = 0;
  while (arr.length < 10) {
    arr[i + 1] = arr[i] + item;
    i += 1;
  }

  const corentAnswer = arr[indexErasedNumber];
  arr[indexErasedNumber] = '..';
  const question = `${arr}`;

  return [question, corentAnswer];
};


const getTask = () => {
  const task = makeTask();
  return [task[0], `${task[1]}`];
};


const getRules = () => 'What number is missing in this progression?';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
