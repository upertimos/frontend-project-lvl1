import runEngine from '../index.js';
import randomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const mapOperatorToOperations = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
};

const genGameData = () => {
  const a = randomInteger(0, 10);
  const b = randomInteger(0, 10);
  const operators = Object.keys(mapOperatorToOperations);
  const index = randomInteger(0, operators.length - 1);
  const operator = operators[index];
  const question = `${a} ${operator} ${b}`;
  const calculate = mapOperatorToOperations[operator];
  const rightAnswer = calculate(a, b);

  return [question, String(rightAnswer)];
};

const startCalcGame = () => {
  runEngine(task, genGameData);
};

export default startCalcGame;
