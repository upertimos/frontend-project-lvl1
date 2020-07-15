import runEngine from '../index.js';
import randomInteger from '../randomInteger.js';
import NODgameTask from '../tasks_for_games/NODgameTask.js';

const NOD = (num1, num2) => {
  let x = num1;
  let y = num2;
  for (let i = 1; i < num1; i += 1) {
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};

const gameDataGenerator = () => {
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const answer = (NOD(num1, num2));
  return [`${num1} ${num2}`, String(answer)];
};

const startNODgame = () => {
  const task = NODgameTask;
  (runEngine(task, gameDataGenerator));
};

export default startNODgame;
