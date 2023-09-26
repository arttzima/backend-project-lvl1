import { evaluate, randomInt } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'What is the result of the expression?';

const genarateMathExpression = () => {
  const operations = ['+', '-', '*'];

  const firstOperand = randomInt(0, 10);
  const secondOperand = randomInt(0, 10);
  const operation = operations[randomInt(0, operations.length)];

  return `${firstOperand} ${operation} ${secondOperand}`;
};

const evaluateMathExpression = (inputValue) => {
  let result;
  try {
    result = evaluate(inputValue);
  } catch {
    result = inputValue;
  }
  return `${result}`;
};

export default () => gameFlow(gameRule, genarateMathExpression, evaluateMathExpression);
