import readlineSync from 'readline-sync';

export const start = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
};