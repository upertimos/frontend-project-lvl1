import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (firstNum) => {
  const arr = [];
  const randomNum = randomInteger(0, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    if (arr.length === 0) {
      arr.push(firstNum);
    } else {
      arr.push(arr[i] = arr[i - 1] + randomNum);
    }
  }
  return arr.slice(0, arr.length - 1);
};

const genGameData = () => {
  const progression = getProgression(randomInteger(0, 10));
  const index = randomInteger(0, progressionLength - 1);
  const question = progression.slice(0, index)
    .concat('..', progression.slice(index + 1, progression.length)).join(' ');
  const answer = progression[index];
  return [question, String(answer)];
};

const startProgressionGame = () => {
  runEngine(task, genGameData);
};

export default startProgressionGame;
