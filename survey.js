const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  let name = answer;
  rl.question("What is an activity you like doing? ", (answer1) => {
    let activity = answer1;
    rl.question("What do you listen to while doing that? ", (answer2) => {
      let music = answer2;
      rl.question("Which meal is your favourite? ", (answer3) => {
        let favMeal = answer3;
        rl.question("What is your favourite thing to eat for that meal? ", (answer4) => {
          let favFood = answer4;
          rl.question("What is you favourite sport? ", (answer5) => {
            let favSport = answer5;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at? ", (answer6) => {
              let superpower = answer6;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

