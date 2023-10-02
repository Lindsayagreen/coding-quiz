var quizContainer = document.querySelector(".quiz-container");
var startButton = document.querySelector(".start-button");
var questionContainer = document.querySelector(".question-container");
var questionText = document.querySelector('.question-text');
var timerContainer = document.querySelector(".timer-container");
var timerElement = document.querySelector(".timer");
var timeLeft = document.querySelector(".timeLeft");
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

    startTimer();

    showQuestion();
}

// function startTimer() {
var secondsLeft = 30;
var timerInterval;
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
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
    if (this.dataset.value === questions[level].answer) {
        level++;
        if (level === questions.length) {
            gameOver();
        } else {
            showQuestion();
        }
    } else {
        secondsLeft -= 9;
    }
    if (secondsLeft <= 0) {
        gameOver();
    }
}

function gameOver() {
    clearInterval(timerInterval);
    questionText1.textContent = "End Game!";
    questionText2.textContent = '';

    var restartButton = document.createElement('button');
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", function () {
        // location.reload();
        level = 0
        secondsLeft = 30;
        startQuiz();
    });
    questionText2.appendChild(restartButton);

    var scoreboardButton = document.createElement('button');
    scoreboardButton.textContent = "View Scoreboard";
    scoreboardButton.addEventListener("click", function () {
        window.location.href = "scoreboard.html";
    });
    questionText2.appendChild(scoreboardButton);
}
