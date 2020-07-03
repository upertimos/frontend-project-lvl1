import readlineSync from 'readline-sync';
import userName from '../src/greeting.js';
import oops from '../src/oops.js';

export const task = 'What is the result of the expression?';

export const calc = (num1, num2) => {
  const arrOfOperators = [[`${num1} + ${num2}`], [`${num1} - ${num2}`], [`${num1} * ${num2}`]];
  const arrOfExpression = [[num1 + num2], [num1 - num2], [num1 * num2]];
  const index = Math.floor(Math.random() * arrOfOperators.length);
  const expression = +(arrOfExpression[index].join(' '));
  console.log(`Question: ${arrOfOperators[index].join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (+answer === expression) {
    return 'Correct!';
  }

  return oops(answer, expression, userName);
};
