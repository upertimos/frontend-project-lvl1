#!/usr/bin/env node

import { NODgame, task } from '../games/brain-gcd.js';
import userName from '../src/greeting.js';
import randomInteger from '../src/randomInteger.js';

// eslint-disable-next-line consistent-return
const execute = () => {
  console.log(task);
  for (let i = 1; i < 4; i += 1) {
    const call = NODgame(randomInteger(0, 100), randomInteger(0, 100));
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
