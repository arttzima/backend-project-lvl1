import readlineSync from 'readline-sync';
import { getPlayerName, greet } from './cli.js';

const gameFlow = (rule, makeQuestion, checkAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = getPlayerName();
  greet(name);
  console.log(rule);

  const TRYING = 3;

  for (let count = 0; count < TRYING; count += 1) {
    const question = makeQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    console.log('answer: ', answer);
    const correctAnswer = checkAnswer(question);
    console.log('correctAnswer: ', correctAnswer);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulation ${name}!`);
};

export default gameFlow;
