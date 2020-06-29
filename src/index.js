import { userName } from './cli.js';
import { randomNum, question } from '../games/brain-even.js';
import { randomNumFromTen, calc } from '../games/brain-calc.js';

export const launch = (callOfGame) => {
  const count = 0;
  for (let i = 0; i < 3; i += 1) {
    if (count < 4) {
      console.log(callOfGame);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName} !`);
  }
};

export {
  randomNum, question, randomNumFromTen, calc,
};
