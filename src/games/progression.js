import { getRandomNumberRange, generateArithmeticProgression } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'What number is missing in the progression?';

const makeQuestionWithCorrectAnswer = () => {
  const progression = generateArithmeticProgression();

  const placeholder = '..';
  const indexForPlaceholder = getRandomNumberRange(0, progression.length - 1);
  const hiddenElement = progression[indexForPlaceholder];

  const prepearedProgression = [...progression];
  prepearedProgression[indexForPlaceholder] = placeholder;

  return { question: prepearedProgression.join(' '), correctAnswer: `${hiddenElement}` };
};

export default () => gameFlow(gameRule, makeQuestionWithCorrectAnswer);
