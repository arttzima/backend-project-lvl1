import { getRandomNumberRange, gcd } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const makeQuestionWithCorrectAnswer = () => {
  const firstArgument = getRandomNumberRange(1, 10);
  const secondArgument = getRandomNumberRange(1, 10);

  const question = `${firstArgument} ${secondArgument}`;
  const correctAnswer = `${gcd(firstArgument, secondArgument)}`;

  return { question, correctAnswer };
};

export default () => gameFlow(gameRule, makeQuestionWithCorrectAnswer);
