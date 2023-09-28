import { evaluate, randomInt } from 'mathjs';
import gameFlow from '../index.js';

const gameRule = 'What is the result of the expression?';

const genarateMathExpression = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[randomInt(0, operations.length)];

  const firstOperand = randomInt(0, 10);
  const secondOperand = randomInt(0, 10);

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

const generateQuestionWithCorrectAnswer = () => {
  const question = genarateMathExpression();
  const correctAnswer = evaluateMathExpression(question);

  return { question, correctAnswer };
};

export default () => gameFlow(gameRule, generateQuestionWithCorrectAnswer);
