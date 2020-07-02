#!/usr/bin/env node

import { NODgame, randomNum } from '../games/brain-gcd.js';
import { userName } from '../src/greeting.js';

// eslint-disable-next-line consistent-return
const execute = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i < 4; i += 1) {
    const call = NODgame(randomNum(), randomNum());
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
