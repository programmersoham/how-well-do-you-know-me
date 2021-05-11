var readlinesync = require('readline-sync');
var score = 0;
var highscore = { 
  name: "James",
  topScore: 0
};

  var userName = readlinesync.question("Hey, what's your name ?");
  console.log("Welcome to How well your know me "+ userName);


function play(Q1,A1) {
  var userAnswer = readlinesync.question(Q1  );
 
  if (userAnswer === A1) {
    console.log("Correct answer");
    score++;
  } else console.log("wrong answer");
}
var questions = [
  {
    q: "where am I from ",
    a: "vadodara",
  },
  {
    q: "Do i like memes(yes/no)?",
    a: "no",
  },
  {
    q: "how many siblings do I have?(1 or 2)",
    a: "1",
  },
  {
    q: "Do I like Tea or Coffee?",
    a: "Tea",
  },
  {
    q: "What is my favourite ice cream flavour?",
    a: "chocolate",
  },
  {
    q: "which company phone do i have?",
    a: "vivo",
  },
];
for (var i = 0; i < questions.length; i++) {
  play(questions[i].q, questions[i].a);
}

console.log("Your score is " + score);
 if(score > highscore.topScore){
    highscore.topScore = score;
    console.log('Congratulations  ' + userName)
    console.log("You have beaten the highscore. \nNew HIGHSCORE: " + highscore.topScore)
    console.log("you have beaten " +highscore.name)

  }
  console.log("\nThanks for playing.")


