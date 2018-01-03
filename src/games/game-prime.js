import { beginGame, getRandom } from '..';


const isPrime = (nam) => {
  const iter = (namber, acc) => {
    if (namber % acc === 0) {
      return false;
    }
    if (acc > namber / 2) {
      return true;
    }
    return iter(namber, acc + 1);
  };
  return iter(nam, 2);
};


const getTask = () => {
  const nam = getRandom(2, 20);
  const answer = isPrime(nam) ? 'yes' : 'no';
  return [`${nam}`, answer];
};


const getRules = () => 'Answer "yes" or "no". Is this number prime? ';

const begin = () => {
  beginGame(getRules, getTask);
};

export default begin;
