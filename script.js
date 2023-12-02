
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const quizQuestions = [
        {
            question: "Choose a breakfast food:",
            answers: ["Glazed donut", "Spicy taco", "Green smoothie", "Leftover pizza"]
        },
        {
            question: "Pick a vacation destination:",
            answers: ["A mysterious, uncharted island", "A luxury moon resort", "A medieval castle with WiFi", "A deep-sea underwater hotel"]
        }
        // More questions can be added in a similar format
    ];
    let currentQuestionIndex = 0;
    let userAnswers = [];

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const quizSection = document.getElementById('quiz-section');
    quizSection.innerHTML = `<h2>${question.question}</h2>`;

    question.answers.forEach((answer) => {
        const button = createAnswerElement(answer);
        if (button instanceof Node) {
            quizSection.appendChild(button);
        }
    });
}

function createAnswerElement(answer) {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => handleAnswerClick(answer));
    return button;
}

function handleAnswerClick(answer) {
    userAnswers[currentQuestionIndex] = answer;
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        calculateResult();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});

// ... rest of your script.js code ...

    }

    function calculateResult() {
        // Logic to calculate the superpower based on answers will go here
        showResult();
    }

    function showResult() {
        // Logic to show the result
    }

    displayQuestion();
});
