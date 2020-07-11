import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const engine = (task, generator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(task);
  for (let i = 1; i < 4; i += 1) {
    const pair = generator();
    console.log(`Question: ${pair[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === pair[1]) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName} !`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${pair[1]}".
Let's try again, ${userName} !`);
      return;
    }
  }
};

export default engine;
