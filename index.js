var readlineSync = require("readline-sync")

var score=0


var playerName = readlineSync.question("what is your name ? ");

console.log("welcome "+playerName +" !!! let's see how well you know mahima ?")

// creation of function

function play(question,answer)
{
 var playerAnswer = readlineSync.question(question)
 if (playerAnswer == answer)
 {
  console.log("you are right!!");
  score= score+1;
 }
 else
 {
   console.log("oops!!");
 }
  console.log("current score: ", score);
  console.log("-------------")
}

// giving question to the function

var questions = [
  {
  question: "What is my pet name? ",
  answer: "guddu"
}, 
{
  question: "which is fav color? ",
  answer: "white"
},
{
  question: "what is my fav food? ",
  answer: "momos"
}
];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log(playerName+ " your score is "+score);
