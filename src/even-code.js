import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName} !`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numbers = { 66: 'yes', 78: 'yes', 1097: 'no' };
const arrayOfNumbers = [66, 78, 1097];
let count = 0;
export const question = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === numbers[num]) {
    count += 1;
    return 'Correct!';
  }
  count += 5;
  return `"${answer}" is wrong answer ;(. Correct answer was "${numbers[num]}".
Let's try again, ${userName} !`;
};
for (let i = 0; i < arrayOfNumbers.length; i += 1) {
  if (count < 3) {
    console.log(question(arrayOfNumbers[i]));
  }
}
if (count === 3) {
  console.log(`Congratulations, ${userName} !`);
}
