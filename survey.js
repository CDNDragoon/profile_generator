const readline = require('readline');
console.clear();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What\'s your name, or nickname? ', name => {
    rl.question('What\'s an activity you like doing? ', activity => {
      rl.question('What do you listen to while doing that? ', listen => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', meal => {
          rl.question('What\'s your favourite thing to eat for that meal? ', food => {
            rl.question('Which sport do you prefer? ', sport => {
              rl.question('What is your superpower? Everyone does something specail! ', power => {
                /*
                Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
                */
               console.log(`${name} loves listening to ${listen} while ${activity}, munching ${food} for ${meal}, loves ${sport} over any other sport, and is amazing at ${power}.`);
                rl.close();
            });
          });
        });
      });
    });
  });
});