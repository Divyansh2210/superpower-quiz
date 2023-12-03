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
        },
        {
            question: "What's your go-to dance move?",
            answers: ["The Robot", "The Moonwalk", "The Macarena", "I’m more of a sit-and-nod person"]
        },
        {
            question: "On a rainy day, you're most likely to:",
            answers: ["Build an epic blanket fort", "Start an indoor treasure hunt", "Curl up with a book and tea", "Conduct mad science experiments"]
        },
        {
            question: "Choose a mythical creature:",
            answers: ["A fire-breathing dragon", "A unicorn with rainbow powers", "A shape-shifting werewolf", "A mischievous fairy"]
        },
        {
            question: "If you found a genie, what would you wish for?",
            answers: ["Infinite pizza", "The ability to fly", "World peace, but with a twist", "A time-traveling spaceship"]
        },
        {
            question: "What's your favorite type of movie?",
            answers: ["Action-packed superhero flick", "Laugh-out-loud comedy", "Spine-chilling horror", "Mind-bending sci-fi"]
        },
        {
            question: "Pick a color for your superhero cape:",
            answers: ["Neon pink", "Electric blue", "Invisible", "Rainbow glitter"]
        },
        {
            question: "How would you deal with an alien invasion?",
            answers: ["Befriend the aliens with snacks", "Use my wit and cunning", "Assemble a team of heroes", "Hide and hope for the best"]
        },
        {
            question: "What's your ideal sidekick?",
            answers: ["A talking cat with attitude", "A loyal robot butler", "A wise-cracking ghost", "I work alone"]
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function displayQuestion() {
        const quizSection = document.getElementById('quiz-section');
        quizSection.innerHTML = ''; // Clear previous content
        const question = quizQuestions[currentQuestionIndex];
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.question;
        quizSection.appendChild(questionElement);

        question.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => handleAnswerSelection(answer));
            quizSection.appendChild(button);
        });
    }

    function handleAnswerSelection(answer) {
        userAnswers[currentQuestionIndex] = answer;
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            calculateResult();
        }
    }

    function calculateResult() {
        const superpower = determineSuperpowerBasedOnAnswers(userAnswers);
        const resultSection = document.getElementById('result-section');
        resultSection.innerHTML = `<h2>Your Superpower is: ${superpower}</h2>`;
        resultSection.style.display = 'block';
    }

    function determineSuperpowerBasedOnAnswers(answers) {
        const categoryCounts = { Adventurous: 0, Humorous: 0, Intellectual: 0, Creative: 0 };
        answers.forEach(answer => {
            switch (answer) {
                case "Glazed donut":
                case "The Macarena":
                case "Laugh-out-loud comedy":
                case "A fire-breathing dragon":
                case "A mischievous fairy":
                case "Neon pink":
                case "A wise-cracking ghost":
                    categoryCounts.Humorous++;
                    break;
                case "Spicy taco":
                case "The Moonwalk":
                case "Action-packed superhero flick":
                case "Electric blue":
                case "A talking cat with attitude":
                case "Befriend the aliens with snacks":
                case "Assemble a team of heroes":
                    categoryCounts.Adventurous++;
                    break;
                case "Green smoothie":
                case "I’m more of a sit-and-nod person":
                case "World peace, but with a twist":
                case "Mind-bending sci-fi":
                case "Invisible":
                case "The ability to fly":
                case "A time-traveling spaceship":
                    categoryCounts.Intellectual++;
                    break;
                case "Leftover pizza":
                case "A deep-sea underwater hotel":
                case "A mysterious, uncharted island":
                case "Build an epic blanket fort":
                case "Start an indoor treasure hunt":
                case "A medieval castle with WiFi":
                case "Rainbow glitter":
                case "Use my wit and cunning":
                case "Hide and hope for the best":
                case "I work alone":
                case "A unicorn with rainbow powers":
                case "A shape-shifting werewolf":
                    categoryCounts.Creative++;
                    break;
            }
        });

        const dominantCategory = Object.keys(categoryCounts).reduce((a, b) => categoryCounts[a] > categoryCounts[b] ? a : b);
        return mapCategoryToSuperpower(dominantCategory);
    }

    function mapCategoryToSuperpower(category) {
        const superpowers = {
            Adventurous: "Teleportation to Unknown Destinations",
            Humorous: "Turning Anything into Chocolate",
            Intellectual: "Instant Knowledge Download",
            Creative: "Ability to Paint Life into Reality"
        };

        return superpowers[category] || "Mystery Power (Discover Yourself!)";
    }

    displayQuestion();
});
