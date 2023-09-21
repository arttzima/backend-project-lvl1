import readlineSync from 'readline-sync';
import random from 'lodash.random';

const isEven = (n) => n % 2 === 0;

const check = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

const generateNumber = () => {
  const MIN = 0;
  const MAX = 100;
  const result = random(MIN, MAX);

  return result;
};

const game = (playerName) => {
  const TRYING = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let count = 0; count < TRYING; count += 1) {
    const number = generateNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = check(number);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default game;
