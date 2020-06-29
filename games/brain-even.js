import readlineSync from 'readline-sync';
import { userName } from '../src/greeting.js';
import { oops } from './brain-calc.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const randomNum = () => Math.floor(Math.random() * 100);
export const even = (num) => (num % 2 === 0 ? 'yes' : 'no');

export let count = 0;

export const question = (num) => {
  console.log(`Question: ${num}`);
  const expression = even(num);
  const answer = readlineSync.question('Your answer: ');
  if (answer === expression) {
    count += 1;
    return 'Correct!';
  }
  count += 5;
  return oops(answer, expression, userName);
};
