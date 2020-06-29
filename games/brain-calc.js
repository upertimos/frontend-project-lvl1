import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

export const randomNumFromTen = () => Math.floor(Math.random() * 10);

export const oops = (answer, expression) => `"${answer}" is wrong answer ;(. Correct answer was "${expression}".
Let's try again, ${userName} !`;

export let count = 0;

export const calc = (num1, num2) => {
  console.log('What is the result of the expression?');

  const arrOfOperators = [[`${num1} + ${num2}`], [`${num1} - ${num2}`], [`${num1} * ${num2}`]];
  const arrOfExpression = [[num1 + num2], [num1 - num2], [num1 * num2]];
  const index = Math.floor(Math.random() * arrOfOperators.length);
  const expression = +(arrOfExpression[index].join(' '));
  console.log(`Question: ${arrOfOperators[index].join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (+answer === expression) {
    count += 1;
    return 'Correct!';
  }
  count += 5;
  return oops(answer, expression, userName);
};
