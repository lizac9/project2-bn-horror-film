// Wait for the DOM to finish loading before running the game

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/* Questions */

let questions = [{
        question: 'Which famous director brought us the 1968 horror film "Hour of the Wolf"?',
        choice1: 'Richard Linklater',
        choice2: 'Ingmar Bergman',
        choice3: 'Robert Bresson',
        choice4: 'Stanley Kubrick',
        answer: '2',
    },
    {
        question: 'In the 1920 silent film classic "The Cabinet of Dr. Caligari", what does the protagonist use to commit murder?',
        choice1: 'Radio waves',
        choice2: 'An atomic bomb',
        choice3: 'A sleepwalker',
        choice4: 'Poisonous spiders',
        answer: '3',
    },
    {
        question: 'What is the name for the monster in the 1954 movie "Creature From the Black Lagoon"?',
        choice1: 'Godzilla',
        choice2: 'Gog',
        choice3: 'Golem',
        choice4: 'Gill-man',
        answer: '4',
    },
    {
        question: 'What is the profession of Mary Henry, the main character in Carnival of Souls (1962), by Herk Harvey?',
        choice1: 'Pianist',
        choice2: 'Psychologist',
        choice3: 'Saxophonist',
        choice4: 'Priest',
        answer: '1',
    },
    {
        question: 'Which one of these is a black and white horror film written and directed by a woman?',
        choice1: 'Draculas Daughter (1936)',
        choice2: 'A Girl Walks Home Alone at Night (2014)',
        choice3: 'Smithereens (1982)',
        choice4: 'Morvern Callar (2002)',
        answer: '2',
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Checks the answer against the first element in
// the returned calculateCorrectAnswer array

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100 }%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        // Gets the current tally of incorrect answers from the DOM and increments it
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        // Gets the current score from the DOM and increments it
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();