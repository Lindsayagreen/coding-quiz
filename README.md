# coding-quiz

button.setAttribute("data-value", questions[currentQuestion].Option[i])
    button.textContent = questions[currentQuestion].Option[i]
    button.addEventListener("click", checkAnswer);
    options.appendChild(button);