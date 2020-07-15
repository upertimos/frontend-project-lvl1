import runEngine from '../index.js';
import randomInteger from '../randomInteger.js';
import primeGameTask from '../tasks_for_games/primeGameTask.js';

const checkNumberIsPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameDataGenerator = () => {
  const question = randomInteger(2, 1000);
  const rightAnswer = checkNumberIsPrime(question);
  return [question, rightAnswer];
};

const startPrimeGame = () => {
  const task = primeGameTask;
  (runEngine(task, gameDataGenerator));
};

export default startPrimeGame;
