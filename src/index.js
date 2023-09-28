import readlineSync from 'readline-sync';
import { getPlayerName, greet } from './cli.js';

const gameFlow = (rule, makeQuestionWithRightAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = getPlayerName();
  greet(name);
  console.log(rule);

  const TRYING = 3;

  for (let count = 0; count < TRYING; count += 1) {
    const { question, correctAnswer } = makeQuestionWithRightAnswer();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameFlow;
