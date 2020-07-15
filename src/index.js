import readlineSync from 'readline-sync';
import numOfGameRounds from './numOfGameRounds.js';

// eslint-disable-next-line consistent-return
const runEngine = (task, generator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(task);
  for (let i = 0; i < numOfGameRounds; i += 1) {
    const pair = generator();
    const [question, rightAnswer] = pair;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName} !`);
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default runEngine;
