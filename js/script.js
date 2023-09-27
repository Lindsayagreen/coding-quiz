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

var startButton = document.querySelector("#.start-button");
var submitButton = document.querySelector (".submit-button");
var saveButton = document.querySelector(".save-button");
var timerElement = document.querySelector(".timer");
var questionContainer = document.querySelector(".question-container");
var timeLeft = document.querySelector("time-left");



// What is the difference between getElement and QuerySelector? WHy use one over the other? 


// Const instead of var- look this up to confirm 
var questions = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet"
    },
];



startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitQuiz);
saveButton.addEventListener("click", saveScore);







    // Save the initials and score in some data structure or send to a server
    // Redirect to a high score page or display the high scores
// function saveScore() {
//     const initials = initialsInput.value;






