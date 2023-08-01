let questions = [
    {
        question: "Who is the father of HTML?",
        answers: [
            { text: " Rasmus Lerdorf", correct: false },
            { text: " Tim Berners-Lee", correct: true },
            { text: "Brendan Eich ", correct: false },
            { text: "Sergey Brin ", correct: false },

        ]
    },
    {
        question: " Which of the following is used to read an HTML page and render it ?",
        answers: [
            { text: "Web server", correct: false },
            { text: " Web network", correct: false },
            { text: "Web matrix", correct: false },
            { text: " Web browser", correct: true },

        ]
    },
    {
        question: "Which of the following provides a reuse mechanism?",
        answers: [
            { text: "Abstraction", correct: false },
            { text: "Inheritance", correct: true },
            { text: "Dynamic binding", correct: false },
            { text: "Encapsulation", correct: false },

        ]
    },
    {
        question: " Which of the following cannot be checked in a switch-case statement?",
        answers: [
            { text: "Character", correct: false },
            { text: "Integer", correct: false },
            { text: "Float", correct: true },
            { text: "enum", correct: false },

        ]
    },
    {
        question: "Which of the following is not a type of constructor?",
        answers: [
            { text: "Copy constructor", correct: false },
            { text: "Friend constructor", correct: true },
            { text: "Default constructor", correct: false },
            { text: "Parameterized constructor", correct: false },

        ]
    },
    {
        question: "Which one of the following is not a prime number?",
        answers: [
            { text: "31", correct: false },
            { text: "91", correct: true },
            { text: "61", correct: false },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: " What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
        answers: [
            { text: "18", correct: false },
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: "1397 x 1397 = ?",
        answers: [
            { text: "2031719", correct: false },
            { text: " 18362619", correct: false },
            { text: "1981709", correct: false },
            { text: "1951609", correct: true },

        ]
    },
    {
        question: "Which one of the following can't be the square of natural number ?",
        answers: [
            { text: "143642", correct: true },
            { text: "75625", correct: false },
            { text: "28561", correct: false },
            { text: "None of these", correct: false },

        ]
    },
    {
        question: "(1000)9 ÷ 1024 = ?",
        answers: [
            { text: "10000", correct: false },
            { text: "1000", correct: true },
            { text: "100", correct: false },
            { text: "10", correct: false },

        ]
    },
    {
        question: " The default value for an interval is __________",
        answers: [
            { text: "4000", correct: false },
            { text: "2390", correct: false },
            { text: "1000", correct: false },
            { text: "5000", correct: true },

        ]
    },
    {
        question: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        answers: [
            { text: "type", correct: false },
            { text: "id", correct: true },
            { text: "class", correct: false },
            { text: "article", correct: false },

        ]
    },
    {
        question: "Which country developed the first DNA vaccine for dengue?",
        answers: [
            { text: "Australia", correct: false },
            { text: "India", correct: true },
            { text: "Netherlands", correct: false },
            { text: "Denmark", correct: false },

        ]
    },
    {
        question: "UIDAI has launched a new mobile app named which to perform face authentication?",
        answers: [
            { text: "Face Recognition", correct: false },
            { text: "Face identifier", correct: false },
            { text: "Aadhaar Face Recognition", correct: false },
            { text: "AadhaarFaceRd", correct: true },

        ]
    },
    {
        question: "Who became the 10th cricketer to make 500 international appearances?",
        answers: [
            { text: "Yuvraj Singh", correct: false },
            { text: "Virat Kohli", correct: true },
            { text: "M.S Dhoni", correct: false },
            { text: "Sanju samson", correct: false },

        ]
    },
    {
        question: "Which two countries are hosting the FIFA Women's Football World Cup - 2023?",
        answers: [
            { text: " Kenya and Australia", correct: false },
            { text: "India and Australia", correct: false },
            { text: "Australia and New Zealand", correct: true },
            { text: "Sri Lanka and New Zealand", correct: false },

        ]
    },
    {
        question: "Who has been appointed as the head coach for the Asian Games?",
        answers: [
            { text: " Gautam Gambhir", correct: false },
            { text: "Irfan Pathan", correct: false },
            { text: "VVS Laxman", correct: true },
            { text: " Virender Sehwag", correct: false },

        ]
    },
    {
        question: " Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            { text: "largest railway station", correct: true },
            { text: "highest railway station", correct: false },
            { text: "longest railway station", correct: false },
            { text: "None of the above", correct: false },

        ]
    },
    {
        question: "What is the unit for measuring the amplitude of a sound?",
        answers: [
            { text: "Decibel", correct: true },
            { text: "Coulomb", correct: false },
            { text: "Hum", correct: false },
            { text: "Centimeter", correct: false },

        ]
    },

    {
        question: "Which of the following type of class allows only one object of it to be created?",
        answers: [
            { text: "Virtual class", correct: false },
            { text: "Abstract class", correct: false },
            { text: "Singleton class", correct: true },
            { text: "Friend class", correct: false },

        ]
    },

]
// get id from html
let quetionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

// question numbers and score initialize
let currentQuestionIndex = 0;
let score = 0;
// next button and question increment

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();
    // display questions
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quetionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // display answers
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

// reset previous qustions
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
// selected answer true or flase
function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");

        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    // avoid multiple selection

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // next button display

    nextButton.style.display = "block";
}
// show score function
function showScore() {
    resetState();
    quetionElement.innerHTML = `You scored ${score} out of ${questions.length} !! `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// next question
function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
// next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

// function invoking
showQuestion();


