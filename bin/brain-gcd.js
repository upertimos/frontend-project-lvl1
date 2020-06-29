#!/usr/bin/env node

import { NODgame, count } from '../games/brain-gcd.js';
import { randomNum } from '../games/brain-even.js';
import { userName } from '../src/greeting.js';

for (let i = 0; i < 3; i += 1) {
  if (count < 4) {
    console.log(NODgame(randomNum(), randomNum()));
  }
}
if (count === 3) {
  console.log(`Congratulations, ${userName} !`);
}
