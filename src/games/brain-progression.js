import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (firstNum, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * step);
  }
  return progression;
};

const genGameData = () => {
  const firstNum = randomInteger(0, 10);
  const stepOfProgression = randomInteger(0, 10);
  const progression = makeProgression(firstNum, stepOfProgression, progressionLength);
  const index = randomInteger(0, progression.length - 1);
  const answer = progression[index];
  progression[index] = '..';

  return [progression.join(' '), String(answer)];
};

const startProgressionGame = () => {
  runEngine(task, genGameData);
};

export default startProgressionGame;
