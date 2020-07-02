import readlineSync from 'readline-sync';
import { userName } from '../src/greeting.js';
import oops from '../src/oops.js';

export const randomNum = () => Math.floor(Math.random() * 100);

const NOD = (num1, num2) => {
  let x = num1;
  let y = num2;
  for (let i = 1; i < num1; i += 1) {
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};

export const NODgame = (num1, num2) => {
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const expression = NOD(num1, num2);
  if (+answer === expression) {
    return 'Correct!';
  }

  return oops(answer, expression, userName);
};
