import readlineSync from 'readline-sync';
import oops from '../src/oops.js';
import randomInteger from '../src/randomInteger.js';

export const isPrime = (n) => {
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

export const primeGame = () => {
  const randomNum = randomInteger(2, 1000);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const expression = isPrime(randomNum);
  if (answer === expression) {
    return 'Correct!';
  }
  return oops(answer, expression);
};

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
