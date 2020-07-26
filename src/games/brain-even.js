import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const genGameData = () => {
  const question = randomInteger(1, 100);
  const evenOrOdd = isEven(question);
  const rightAnswer = evenOrOdd === true ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => {
  runEngine(task, genGameData);
};

export default startEvenGame;
