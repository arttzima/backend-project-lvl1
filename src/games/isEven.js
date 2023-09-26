import { randomInt } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRandomNumberToMax = () => {
  const max = 100;
  return randomInt(max);
};

const isEven = (n) => n % 2 === 0;

const checkNumberEvenAndGetAnswer = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

export default () => gameFlow(gameRule, generateRandomNumberToMax, checkNumberEvenAndGetAnswer);
