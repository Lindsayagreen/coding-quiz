// Get references to HTML elements
const scoreForm = document.getElementById("scoreForm");
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoreList = document.getElementById("scoreList");

// Load scores from local storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadScores();
});

// Add an event listener to the form for submitting scores
scoreForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const score = parseInt(scoreInput.value);

    if (!name || isNaN(score)) {
        alert("Please enter a valid name and score.");
        return;
    }

    // Create a new score object
    const newScore = { name, score };

    // Get existing scores from local storage
    const scores = getScoresFromLocalStorage();

    // Add the new score to the list
    scores.push(newScore);

    // Sort scores in descending order
    scores.sort((a, b) => b.score - a.score);

    // Limit the list to the top 10 scores
    const topScores = scores.slice(0, 10);

    // Save the updated scores to local storage
    localStorage.setItem("scores", JSON.stringify(topScores));

    // Clear the form inputs
    nameInput.value = "";
    scoreInput.value = "";

    // Reload the scoreboard
    loadScores();
});

// Function to load scores from local storage
function loadScores() {
    scoreList.innerHTML = "";

    const scores = getScoresFromLocalStorage();

    scores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        scoreList.appendChild(listItem);
    });
}

// Function to get scores from local storage or initialize if not present
function getScoresFromLocalStorage() {
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    return scores;
}
