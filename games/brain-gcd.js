import engine from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

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

const generator = () => {
  const arr = [];
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const answer = (NOD(num1, num2));
  arr.push(`${num1} ${num2}`, String(answer));
  return arr;
};

const NODgame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  (engine(task, generator));
};

export default NODgame;
