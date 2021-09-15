
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var timerEl= document.getElementById("timer");
var HomepageEl =document.getElementsByTagName ("body");
var startQuizBtn = document.getElementById("generate");
var ScoreKeeperEl = document.getElementById("ScoreKeeper");
var gameScore=0;
var quizTimer, timerCount;
startQuizBtn.onclick = startQuiz;


//array that contains the questions, answers and correct answer index
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

updateQuestion();

//when start button is clicked, the homepage and start button is hidden, and the questions and timer is displayed (and the timer starts)
function startQuiz() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("generate").style.display = "none"; 
    document.getElementById("hidden-question").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("ScoreKeeper").style.display = "block";
    document.getElementById("endScreen").style.display = "block";
    timer();
}

//timer function
function timer (){
  //case matters
    timerCount=90;
    quizTimer = setInterval(function() { 
      timerCount--;
      console.log(timerCount);
      timerEl.innerHTML=timerCount + " seconds remaining";
      if (timerCount===1) {
        timerEl.innerHTML = timerCount + " second remaining";
    } else if (timerCount<=0){
      timerEl.innerHTML = "You've run out of time!";
    } if(timerCount === 0) {
      clearInterval(quizTimer);

  }
 }, 1000)
  }

//ensures questions are updated 

function updateQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    document.write("quiz done");
    return;
  }

  questionEl.innerHTML = currentQuestion.question; 
  answer1El.innerHTML = currentQuestion.answers[0];
  answer2El.innerHTML = currentQuestion.answers[1];
  answer3El.innerHTML = currentQuestion.answers[2];
  
  answer4El.innerHTML= "";
  if (currentQuestion.answers.length >3) {
        answer4El.innerHTML=currentQuestion.answers[3];
  } else {
    answer4El.style.display = "none" ;
  }
}
//checks if selected question is right or wrong
function checkAnswer(clickedAnswer) {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }
  
  if (currentQuestion.correctAnswer === clickedAnswer) {
    //sets background to green if right
    gameScore=gameScore +1;
    document.body.style.backgroundColor = "green";
  }
  else {   
    //if wrong, deducts 10 seconds and sets background to red
    timerCount-=10;
    document.body.style.backgroundColor = "red";
  }
  //setTimeout displays background for 1.1 seconds and resets background to white
  setTimeout(function(){ 
    currentQuestionIndex++;
  updateQuestion();
  document.body.style.backgroundColor = "white";
  }, 1100);

}

 