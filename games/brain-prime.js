import engine from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

const isPrime = (n) => {
  if (n === 2) {
    return 'yes';
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generator = () => {
  const arr = [];
  const randomNum = randomInteger(2, 1000);
  const answer = isPrime(randomNum);
  arr.push(randomNum, answer);
  return arr;
};

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  (engine(task, generator));
};

export default primeGame;
