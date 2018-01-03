import { beginGame, getRandom } from '..';

const duBalance = (num) => {
  const arr = `${num}`;
  const arrNum = arr.split('');
  let minNum = arrNum[0];
  let maxNum = arrNum[0];

  for (let i = 0; i < arrNum.length; i += 1) {
    if (minNum > Number(arrNum[i])) {
      minNum = arrNum[i];
    }
    if (maxNum < Number(arrNum[i])) {
      maxNum = arrNum[i];
    }
  }

  if (Math.abs(Number(maxNum) - Number(minNum)) < 2) {
    const sortNum = Number(arrNum.sort((a, b) => a - b).join(''));
    return sortNum;
  }

  const indexMaxNum = arrNum.indexOf(maxNum);
  const indexMinNum = arrNum.indexOf(minNum);

  for (let i = 0; i < arrNum.length; i += 1) {
    if (i === indexMaxNum) {
      arrNum[i] = String(+maxNum - 1);
    }
    if (i === indexMinNum) {
      arrNum[i] = String(+minNum + 1);
    }
  }

  return duBalance(arrNum.join(''));
};

const getTask = () => {
  const question = `${getRandom(100, 9999)}`;
  const result = duBalance(question);
  return [question, result];
};

const getRules = () => 'Balance the given number.';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
