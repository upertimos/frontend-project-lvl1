import readlineSync from 'readline-sync';
import userName from '../src/greeting.js';
import oops from '../src/oops.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const evenGame = (num) => {
  console.log(`Question: ${num}`);
  const expression = isEven(num);
  const answer = readlineSync.question('Your answer: ');
  if (answer === expression) {
    return 'Correct!';
  }

  return oops(answer, expression, userName);
};
