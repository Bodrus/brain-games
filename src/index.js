import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');
export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);
export const welcome = () => console.log('Welcome to the Brain Games!');


export const start = () => {
  console.log('Welcome to the Brain Games!');
  const PlayerName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${PlayerName}!`);
};

export const beginGame = (rules, getTask, wrongAnswer) => {
  welcome();
  rules();
  const nameUser = userName();
  console.log(`Hello, ${nameUser}`);

  for (let i = 0; i < 3; i += 1) {
    const questionAndUnswer = getTask();
    const question = questionAndUnswer[0];
    const unswer = questionAndUnswer[1];

    console.log(`Question: ${question}`);
    const unswerUser = readlineSync.question('Unswer: ');

    if (unswer === unswerUser && i === 2) {
      console.log(`Congratulations, ${nameUser}`);
    } else if (unswer === unswerUser) {
      console.log('Correct!');
    } else {
      wrongAnswer(nameUser);
      break;
    }
  }
};
