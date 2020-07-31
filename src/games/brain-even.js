import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genGameData = () => {
  const question = randomInteger(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => {
  runEngine(task, genGameData);
};

export default startEvenGame;
