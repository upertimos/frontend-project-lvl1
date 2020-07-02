#!/usr/bin/env node

import { userName } from '../src/greeting.js';
import { randomNum, question, count } from '../games/brain-even.js';

for (let i = 0; i < 3; i += 1) {
  if (count < 4) {
    console.log(question(randomNum()));
  }
}
if (count === 3) {
  console.log(`Congratulations, ${userName} !`);
}