#!/usr/bin/env node

import { getProgression, progressionGame } from '../games/brain-progression.js';
import userName from '../src/greeting.js';
import randomInteger from '../src/randomInteger.js';

// eslint-disable-next-line consistent-return
const execute = () => {
  console.log('What number is missing in the progression?');
  for (let i = 1; i < 4; i += 1) {
    const call = progressionGame(getProgression(randomInteger(0, 10)));
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
