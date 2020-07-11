import engine from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

const generator = () => {
  const arr = [];
  const num1 = randomInteger(0, 10);
  const num2 = randomInteger(0, 10);
  const arrOfOperators = [[`${num1} + ${num2}`], [`${num1} - ${num2}`], [`${num1} * ${num2}`]];
  const arrOfExpression = [[num1 + num2], [num1 - num2], [num1 * num2]];
  const index = Math.floor(Math.random() * arrOfOperators.length);
  arr.push((arrOfOperators[index].join(' ')), (arrOfExpression[index].join(' ')));
  return arr;
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  (engine(task, generator));
};

export default calcGame;
