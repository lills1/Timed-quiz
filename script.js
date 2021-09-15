console.log("hello")

var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var timerEl= document.getElementsByClassName("timer-right");
var startQuizBtn = document.getElementById("generate");
var timerEl= document.getElementsByClassName("timer-right");

var timerCount;
startQuizBtn.onclick = startQuiz;



var questions = [
  {
    question: "what does HTML stand for?",
    answers: ["Hypertext markup language", "Hypertype market language", "Hypertext markup linguistics"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a function in javascript?",
    answers: ["it stores multiple values in a single variable", "it allows you to define a block of code to execute as many times as wanted", "They check specific conditions"],
    correctAnswer: 1,
  },
  {
    question: "When targetting a class in css, which of the following character is used:",
    answers: ["#", "", "."],
    correctAnswer: 2,
  },
  {
    question: "In Javascript, which of the following out of the array would be conisdered [2]: var animals =[ 'turtles', 'cats', 'owl', 'donkey']",
    answers: ["turtles", "cats", "owl", "donkey"],
    correctAnswer: 3, 
  }
];

var currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("generate").style.display = "none"; 
    document.getElementById("hidden-question").style.display = "block";
    document.getElementById("timer-hidden").style.display = "block";
    timerCount=90;
}

 
// document.getElementByid("generate").addEventListener("click", function() {
// var timeleft = 90;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timer-right").textContent = "Finished";
//   } else {
//     document.getElementById("timer-right").textContent = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 90000);
// });


function timer(){
  timerInterval=SetInterval(function() {
    timerCount--;
    console.log(timerCount);
    timerEl.textContent=timerCount + "seconds remaining";
    if (timerCount===1) {
      timerEl.textContent = timerCount + "second remaining";
  } else if (timerCount===0){
    clearInterval(timer);
    timerEl.textContent = timerCount + "You've run out of time!";
  }
}, 1000)
}
updateQuestion();



function updateQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    document.write("quiz done");
    return;
  }

  questionEl.textContent = currentQuestion.question;
  answer1El.textContent = currentQuestion.answers[0];
  answer2El.textContent = currentQuestion.answers[1];
  answer3El.textContent = currentQuestion.answers[2];
  
  answer4El.textContent= "";
  if (currentQuestion.answers.length >3) {
        answer4El.textContent=currentQuestion.answers[3];
  } else {
    answer4El.style.display = "none" ;
  }
}

function checkAnswer(clickedAnswer) {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }
  
  if (currentQuestion.correctAnswer === clickedAnswer) {
    console.log("correct answer!");
  }
  else {    
    console.log("wrong answer");
  }

  currentQuestionIndex++;
  updateQuestion();
}


//to do: add in timer function, add in javascript to comment on if you get right/wrong answer