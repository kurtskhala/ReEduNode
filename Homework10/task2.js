// 2) Write a function that takes text as a parameter,
// the text should be: "What is a plus b?" or "What is a minus b?"
// you should write correct answer, if answer is correct console
// you're humar other wise consoled you're robot

const readline = require("readline");

function robotOrHuman(str) {
  const arrOfWords = str.split(" ");
  let result = 0;
  if (arrOfWords[3] === "plus") {
    result = parseInt(arrOfWords[2]) + parseInt(arrOfWords[4]);
  } else if (arrOfWords[3] === "minus") {
    result = parseInt(arrOfWords[2]) - parseInt(arrOfWords[4]);
  } else {
    return "invalid text";
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`${str}? : `, (userInput) => {
    const userAnswer = parseInt(userInput);

    if (userAnswer === result) {
      console.log("You're human");
    } else {
      console.log("You're robot");
    }

    rl.close();
  });
}

robotOrHuman("what is 5 plus 6");
