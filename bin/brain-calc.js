#!/usr/bin/env node

import userName from '../src/greeting.js';
import { calc, task } from '../games/brain-calc.js';
import randomInteger from '../src/randomInteger.js';

// eslint-disable-next-line consistent-return
const execute = () => {
  console.log(task);
  for (let i = 1; i < 4; i += 1) {
    const call = calc(randomInteger(0, 10), randomInteger(0, 10));
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
