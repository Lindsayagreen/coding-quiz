
var scoreForm = document.getElementById("scoreForm");
var nameInput = document.getElementById("name");
var scoreInput = document.getElementById("score");
var scoreList = document.getElementById("scoreList");


document.addEventListener("DOMContentLoaded", function()  {
    loadScores();
});

scoreForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = nameInput.value;
    var score = parseInt(scoreInput.value);

    if (!name || isNaN(score)) {
        alert("Please enter a valid name and score.");
        return;
    }

    var newScore = { name, score };

    var scores = getScoresFromLocalStorage();

    scores.push(newScore);

    scores.sort((a, b) => b.score - a.score);

    var topScores = scores.slice(0, 10);

    localStorage.setItem("scores", JSON.stringify(topScores));

    nameInput.value = "";
    scoreInput.value = "";

    loadScores();
});

function loadScores() {
    scoreList.innerHTML = "";

    var scores = getScoresFromLocalStorage();

    scores.forEach((score, index) => {
        var listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        scoreList.appendChild(listItem);
    });
}

function getScoresFromLocalStorage() {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    return scores;
}
