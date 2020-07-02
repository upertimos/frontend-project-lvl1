import { userName } from './greeting.js';

const oops = (answer, expression) => `"${answer}" is wrong answer ;(. Correct answer was "${expression}".
Let's try again, ${userName} !`;

export default oops;
