import { randomInt, isPrime } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const check = (n) => {
  const result = isPrime(n) ? 'yes' : 'no';
  return result;
};

const genarateQuestionWithCorrectAnswer = () => {
  const question = randomInt(-1, 100);
  const correctAnswer = check(question);

  return { question: `${question}`, correctAnswer };
};

export default () => gameFlow(gameRule, genarateQuestionWithCorrectAnswer);
