const jokes = require("give-me-a-joke");
const colors = require("colors");

// console.dir(jokes);
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
  console.log(joke.green);
  console.log(joke.trap);
  console.log(joke.inverse);
  console.log(joke.underline.red);
});
