const quizButtons = document.querySelectorAll(`.quiz-option`);
const quizFeedback = document.querySelector(`#quiz-feedback`);
const quizScore = document.querySelector(`#quiz-score`);
const currentYear = document.querySelector(`#current-year`);

let score = 0;
let answered = false;

function checkAnswer(event) {
    if (answered) {
        quizFeedback.textContent = `You have already answered this question.`;
        return;
    }

    const selectedButton = event.currentTarget;

    if (selectedButton.dataset.answer === `correct`) {
        score++;
        quizFeedback.textContent = `Correct! ATP transfers usable energy for many cellular activities.`;
    } else {
        quizFeedback.textContent = `Not quite. ATP is the molecule commonly used to transfer usable energy in cells.`;
    }

    answered = true;
    quizScore.textContent = `Correct answers: ${score}`;

    quizButtons.forEach(button => {
        button.disabled = true;
    });
}

quizButtons.forEach(button => {
    button.addEventListener(`click`, checkAnswer);
});

currentYear.textContent = new Date().getFullYear();