const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

let min = 1;
let max = 100;
let guess;
let secretNumber;

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  guess = Math.floor((max - min) / 2);
  let answer = await ask("Is this your number? Please answer (Y)es, (H)igher, (L)ower")
  if (answer === 'Y') {
    console.log('Correct!') 
  } else if (answer === 'H') {
    console.log("Ok, I'll guess higher...")
  } else if (answer === 'L') {
    console.log("Ok, I'll guess lower...")
  } else {
    console.log("I don't understand that, please enter again.")
  }
  // Now try and complete the program.
  process.exit();
}

// Binary Search
// Secret = 17
// ==============================================================
// Round-1
// Guess  =  50
// Answer = 'lower'
//  1                         50                               100
// Min ----------------------Guess---------------------------- Max
//             Low                            High
// ==============================================================
// Round-2
// Guess = 25
// Answer = 'lower'
//  1            25               50
// Min ---------Guess-------------Max
//       Low             High
// ==============================================================
// Round-3
// Guess = 13
// Answer = 'higher'
// 1      13      25
// Min --Guess----Max
//    Low     High
// ==============================================================
// Round-4
// Guess = 17
// Answer = 'yes'
//  13   17   25
// Min-Guess-Max
//   Low   High
// ==============================================================
