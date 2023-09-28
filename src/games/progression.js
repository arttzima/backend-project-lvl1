import { randomInt } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'What number is missing in the progression?';

const generateArithmeticProgression = () => {
  const begining = randomInt(2, 11);
  const step = randomInt(2, 6);
  const length = randomInt(5, 11);
  const result = [begining];

  let item = begining;

  while (result.length <= length) {
    item += step;
    result.push(item);
  }

  return result;
};

const genarateQuestionWithCorrectAnswer = () => {
  const progression = generateArithmeticProgression();
  const placeholder = '..';
  const indexForPlaceholder = randomInt(0, progression.length);
  const hiddenElement = progression[indexForPlaceholder];

  const prepearedProgression = [...progression];
  prepearedProgression[indexForPlaceholder] = placeholder;

  return { question: `${prepearedProgression.join(' ')}`, correctAnswer: `${hiddenElement}` };
};

export default () => gameFlow(gameRule, genarateQuestionWithCorrectAnswer);
