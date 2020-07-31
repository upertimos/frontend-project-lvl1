import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = randomInteger(0, 1000);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startPrimeGame = () => {
  runEngine(task, genGameData);
};

export default startPrimeGame;
