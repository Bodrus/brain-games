import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);
const userName = () => readlineSync.question('May I have your name? ');
const welcome = () => console.log('Welcome to the Brain Games!');
const helloYuser = name => console.log(`Hi ${name}!`);
const printQuestion = task => console.log(`Question: ${task}`);
const unsver = () => readlineSync.question('Unswer: ');
const congratulationsForVictori = name => console.log(`Congratulations, ${name}`);
const congratulationsForCorrectAnswer = () => console.log('Correct!');
const ptintRuls = ruls => console.log(ruls);
const wrongAnswer = name => console.log(`Wrond answer, try again ${name}`);


export const start = () => {
  welcome();
  helloYuser(userName());
};

export const beginGame = (rules, getTask) => {
  welcome();
  ptintRuls(rules());
  const nameUser = userName();
  helloYuser(nameUser);

  for (let i = 0; i < 3; i += 1) {
    const questionAndUnswer = getTask();
    const correctAnswer = questionAndUnswer[1];

    printQuestion(questionAndUnswer[0]);
    const unswerUser = unsver();

    if (correctAnswer === unswerUser && i === 2) {
      congratulationsForVictori(nameUser);
    } else if (correctAnswer === unswerUser) {
      congratulationsForCorrectAnswer();
    } else {
      wrongAnswer(nameUser);
      break;
    }
  }
};
