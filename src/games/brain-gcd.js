import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const a = num1;
  const b = num2;
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const genGameData = () => {
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const answer = (getGCD(num1, num2));
  return [`${num1} ${num2}`, String(answer)];
};

const startGCDgame = () => {
  runEngine(task, genGameData);
};

export default startGCDgame;
