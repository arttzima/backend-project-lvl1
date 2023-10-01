import { getRandomNumberRange, isPrime } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const check = (n) => {
  const result = isPrime(n) ? 'yes' : 'no';
  return result;
};

const makeQuestionWithCorrectAnswer = () => {
  const question = getRandomNumberRange(1, 100);
  const correctAnswer = check(question);

  return { question, correctAnswer };
};

export default () => gameFlow(gameRule, makeQuestionWithCorrectAnswer);
