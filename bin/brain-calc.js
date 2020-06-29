#!/usr/bin/env node

import { userName } from '../src/cli.js';
import { randomNumFromTen, calc, count } from '../games/brain-calc.js';

for (let i = 0; i < 3; i += 1) {
  if (count < 4) {
    console.log(calc(randomNumFromTen(), randomNumFromTen()));
  }
}
if (count === 3) {
  console.log(`Congratulations, ${userName} !`);
}
