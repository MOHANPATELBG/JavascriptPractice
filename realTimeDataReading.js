import prompt from 'prompt-sync';
const prompt = prompt.start();

let x = prompt('Enter x value: ');
let y = prompt('Enter y value: ');

console.log(`You entered x: ${x} and y: ${y}`);