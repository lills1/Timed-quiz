console.log("hello")

var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var button= document.getElementById("generate");

var questions = [
  {
    question: "what does HTML stand for?",
    answers: ["Hypertext markup language", "hypertype market language", "hypertext markup linguistics"],
    correctAnswer: 0,
  },
  {
    question: "what is the purpose of a function in javascript?",
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

function updateQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    console.log('quiz done')
    return;
  }

  questionEl.textContent = currentQuestion.question;
  answer1El.textContent = currentQuestion.answers[0];
  answer2El.textContent = currentQuestion.answers[1];
  answer3El.textContent = currentQuestion.answers[2];
  answer4El.textContent=currentQuestion.answers[3]
}

function checkAnswer(clickedAnswer) {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }
  
  if (currentQuestion.correctAnswer === clickedAnswer) {
    console.log('correct answer');
  }
  else {
    console.log('wrong answer');
  }

  currentQuestionIndex++;
  updateQuestion();
}

answer1El.addEventListener("click", function () {
  checkAnswer(0);
});

answer2El.addEventListener("click", function () {
  checkAnswer(1);
});

answer3El.addEventListener("click", function () {
  checkAnswer(2);
});

updateQuestion();
















    
