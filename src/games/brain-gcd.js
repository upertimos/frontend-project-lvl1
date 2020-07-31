import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const genGameData = () => {
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const answer = (getGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, String(answer)];
};

const startGCDgame = () => {
  runEngine(task, genGameData);
};

export default startGCDgame;
