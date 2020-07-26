import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const genGameData = () => {
  const num1 = randomInteger(0, 10);
  const num2 = randomInteger(0, 10);
  const index = randomInteger(0, operators.length - 1);
  const operator = operators[index];
  const question = `${num1} ${operator} ${num2}`;
  const gameData = {
    '+': (num1 + num2),
    '-': (num1 - num2),
    '*': (num1 * num2),
  };
  /* если я правильно понял, то выше и есть вложенное определение,
  которое нужно вынести на уровень модуля? если да, то
  тогда нужно выносить и переменные num1 num2.
  как сделать по-другому, пока не понимаю.  */

  const rightAnswer = gameData[operator];

  return [question, String(rightAnswer)];
};

const startCalcGame = () => {
  runEngine(task, genGameData);
};

export default startCalcGame;
