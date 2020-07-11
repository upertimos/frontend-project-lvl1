import engine from '../src/index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generator = () => {
  const arr = [];
  const key = String(Math.floor(Math.random() * 100));
  const value = isEven(key);
  arr.push(key, value);
  return arr;
};

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  (engine(task, generator));
};

export default evenGame;
