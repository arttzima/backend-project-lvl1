import { getRandomNumberRange, isEven } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => {
  const min = 0;
  const max = 100;
  return getRandomNumberRange(min, max);
};

const getCorrectAnswer = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

const generateQuestionWithCorrectAnswer = () => {
  const question = makeQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => gameFlow(gameRule, generateQuestionWithCorrectAnswer);
