import readlineSync from 'readline-sync';
import oops from '../src/oops.js';
import randomInteger from '../src/randomInteger.js';

export const getProgression = (firstNum) => {
  const arr = [];
  const randomNum = randomInteger(0, 10);
  for (let i = 0; i < 10; i += 1) {
    if (arr.length === 0) {
      arr.push(firstNum);
    } else {
      arr.push(arr[i] = arr[i - 1] + randomNum);
    }
  }
  return arr.slice(0, arr.length - 1);
};

export const progressionGame = (progression) => {
  const index = Math.floor(Math.random() * 10);
  const question = progression.slice(0, index)
    .concat('..', progression.slice(index + 1, progression.length)).join(' ');

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const expression = progression[index];
  if (+answer === +expression) {
    return 'Correct!';
  }
  return oops(answer, expression);
};
