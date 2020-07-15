import runEngine from '../index.js';
import randomInteger from '../randomInteger.js';
import progressionGameTask from '../tasks_for_games/progressionGameTask.js';

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

const gameDataGenerator = () => {
  const progression = getProgression(randomInteger(0, 10));
  const index = randomInteger(0, 9);
  const question = progression.slice(0, index)
    .concat('..', progression.slice(index + 1, progression.length)).join(' ');
  const answer = progression[index];
  return [question, String(answer)];
};

const startProgressionGame = () => {
  const task = progressionGameTask;
  (runEngine(task, gameDataGenerator));
};

export default startProgressionGame;
