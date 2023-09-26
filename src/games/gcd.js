import { randomInt, gcd } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const createQuestion = () => {
  const min = 1;
  const max = 50;

  return [randomInt(min, max), randomInt(min, max)];
};

const calculateCorrectAnswer = (value) => {
  const result = gcd(value);
  return `${result}`;
};

export default () => gameFlow(gameRule, createQuestion, calculateCorrectAnswer);
