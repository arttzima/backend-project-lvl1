import { randomInt, gcd } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const createQuestion = () => {
  const min = 1;
  const max = 20;

  return [randomInt(min, max), randomInt(min, max)];
};

const calculateCorrectAnswer = (value) => {
  const result = gcd(value);
  return `${result}`;
};

const generateQuestionWithCorrectAnswer = () => {
  const question = createQuestion();
  const correctAnswer = calculateCorrectAnswer(question);

  return { question: question.join(' '), correctAnswer };
};

export default () => gameFlow(gameRule, generateQuestionWithCorrectAnswer);
