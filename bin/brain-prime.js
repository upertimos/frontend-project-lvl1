#!/usr/bin/env node

import { primeGame, task } from '../games/brain-prime.js';
import userName from '../src/greeting.js';

// eslint-disable-next-line consistent-return
const execute = () => {
  console.log(task);
  for (let i = 1; i < 4; i += 1) {
    const call = primeGame();
    if (call === 'Correct!') {
      console.log('Correct!');
      if (i === 3) {
        return (`Congratulations, ${userName} !`);
      }
    } else {
      return call;
    }
  }
};

console.log(execute());
