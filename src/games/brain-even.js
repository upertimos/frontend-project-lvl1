import runEngine from '../index.js';
import randomInteger from '../randomInteger.js';
import evenGameTask from '../tasks_for_games/evenGameTask.js';

const checkNumberIsEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameDataGenerator = () => {
  const question = randomInteger(1, 100);
  const rightAnswer = checkNumberIsEven(question);
  return [question, rightAnswer];
};

const startEvenGame = () => {
  const task = evenGameTask;
  (runEngine(task, gameDataGenerator));
};

export default startEvenGame;
