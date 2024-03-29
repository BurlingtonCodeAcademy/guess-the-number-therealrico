const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}



let min = 1;
let max = 100;

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.\nThink of a number between 1 and 100 and I will guess it in as few guess as possible")
  let guess = Math.floor((max + min) / 2);
  let answer = await ask("Is this your number? " + guess + " Please answer (Y)es, (H)igher, (L)ower")
   while (answer.toUpperCase() != 'Y') {
    if (answer.toUpperCase() === 'H') {
      min = guess;
      console.log(min + ' This is your new low number.')
      guess = Math.floor((max + min) / 2);
      console.log("Ok, I'll guess higher...")
      answer = await ask("Is this your number? " + guess + " Please answer (Y)es, (H)igher, (L)ower")
    } else if (answer.toUpperCase() === 'L') {
      max = guess;
      console.log(max + ' is your new highest number.')
      guess = Math.floor((max + min) / 2);
      console.log("Ok, I'll guess lower...")
      answer = await ask("Is this your number? " + guess + " Please answer (Y)es, (H)igher, (L)ower")
    } else {
      console.log("I don't understand that, please enter again.")
      answer = await ask("Is this your number? " + guess + " Please answer (Y)es, (H)igher, (L)ower")
    }
    
  }
  
  // Now try and complete the program.
 console.log('WOW, you da man, you should go to Vegas and put it all on the roulette table.') 
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
