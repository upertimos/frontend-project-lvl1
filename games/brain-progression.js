import engine from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

const getProgression = (firstNum) => {
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

const generator = () => {
  const arr = [];
  const progression = getProgression(Math.floor(Math.random() * 10));
  const index = randomInteger(0, 9);
  const question = progression.slice(0, index)
    .concat('..', progression.slice(index + 1, progression.length)).join(' ');
  const answer = progression[index];
  arr.push(question, String(answer));
  return arr;
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  (engine(task, generator));
};

export default progressionGame;
