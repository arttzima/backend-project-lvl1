import { getRandomNumberRange } from '../functions.js';
import gameFlow from '../index.js';

const gameRule = 'What is the result of the expression?';

const makeQuestionWithCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumberRange(0, operators.length - 1);
  const operator = operators[randomIndex];

  const firstOperand = getRandomNumberRange(0, 10);
  const secondOperand = getRandomNumberRange(0, 10);

  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  let evaluatedExpression;

  switch (operator) {
    case '+':
      evaluatedExpression = firstOperand + secondOperand;
      break;
    case '-':
      evaluatedExpression = firstOperand - secondOperand;
      break;
    case '*':
      evaluatedExpression = firstOperand * secondOperand;
      break;

    default:
      evaluatedExpression = Infinity;
  }

  return {
    question: expression,
    correctAnswer: `${evaluatedExpression}`,
  };
};

export default () => gameFlow(gameRule, makeQuestionWithCorrectAnswer);
