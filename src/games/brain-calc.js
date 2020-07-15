import runEngine from '../index.js';
import randomInteger from '../randomInteger.js';
import calcGameTask from '../tasks_for_games/calcGameTask.js';

const gameDataGenerator = () => {
  const num1 = randomInteger(0, 10);
  const num2 = randomInteger(0, 10);
  const arrOfOperators = [[`${num1} + ${num2}`], [`${num1} - ${num2}`], [`${num1} * ${num2}`]];
  const arrOfExpression = [[num1 + num2], [num1 - num2], [num1 * num2]];
  const index = Math.floor(Math.random() * arrOfOperators.length);
  return [(arrOfOperators[index].join(' ')), (arrOfExpression[index].join(' '))];
};

const startCalcGame = () => {
  const task = calcGameTask;
  (runEngine(task, gameDataGenerator));
};

export default startCalcGame;
