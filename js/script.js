//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
var quizContainer = document.querySelector(".quiz-container");
var startButton = document.querySelector(".start-button");
var questionContainer = document.querySelector(".question-container");
var questionText = document.querySelector('question-text');
var timerContainer = document.querySelector(".timer-container");
var timerElement = document.querySelector(".timer");
var timeLeft = document.querySelector(".time-left");
// var submitButton = document.querySelector (".submit-button");
var saveButton = document.querySelector(".save-button");
var level = 0
var questionText1 = document.getElementById("question-text1");
var questionText2 = document.getElementById("question-text2");


var questions = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
        options: ["cats", "HyperText Markup Language", "dogs", "hamsters"]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: ["cats", "Cascading Style Sheet", "dogs", "hamsters"]
    },
];

startButton.addEventListener("click", startQuiz);
function startQuiz() {
    console.log("button clicked")
    // Start the timer
    startTimer();
    // Display the first question (you can replace this with your question logic)
    showQuestion();
}

// function startTimer() {
var secondsLeft = 30;

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    timeLeft.textContent = secondsLeft;
    console.log("inside this display")
}

function showQuestion() {
    questionText1.textContent = questions[level].question;
    questionText2.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        var btn = document.createElement("button")
        btn.setAttribute("data-value", questions[level].options[i])
        btn.textContent = questions[level].options[i]
        btn.addEventListener("click", checkAnswer);
        questionText2.appendChild(btn);
    }
}


function checkAnswer() {

    level++
    showQuestion()
    if (this.dataset.value === questions[level].Result) {
        level++;
        if (currentQuestion === questions.length) {
          // endGame(); 
        } else {
          showQuestion(); // Show next question
        }
      } else {
        time -= 9;
      }
    
      if (time <= 0) {
      //   endGame(); // Call endGame when time is up
      }
}


saveButton.addEventListener("click", saveScore);

// Save the initials and score in some data structure or send to a server
// Redirect to a high score page or display the high scores
// function saveScore() {
//     const initials = initialsInput.value;






