import { getRandomNumberRange, isEven } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

const makeQuestionWithCorrectAnswer = () => {
  const question = getRandomNumberRange(0, 100);
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => gameFlow(gameRule, makeQuestionWithCorrectAnswer);
