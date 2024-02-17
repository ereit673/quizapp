let questions = [
    {
        "question": "What is the capital of Australia?",
        "answer_1": "Sydney",
        "answer_2": "Canberra",
        "answer_3": "Melbourne",
        "answer_4": "Brisbane",
        "right_answer": 2,
    },
    {
        "question": "Which mountain range is known as the 'Roof of the World'?",
        "answer_1": "Andes",
        "answer_2": "Alps",
        "answer_3": "Himalayas",
        "answer_4": "Rockies",
        "right_answer": 3
    },
    {
        "question": "Which ocean is the largest by surface area?",
        "answer_1": "Atlantic Ocean",
        "answer_2": "Indian Ocean",
        "answer_3": "Southern Ocean",
        "answer_4": "Pacific Ocean",
        "right_answer": 4
    },
    {
        "question": "In which continent is the country of Egypt located?",
        "answer_1": "Asia",
        "answer_2": "Africa",
        "answer_3": "Europe",
        "answer_4": "South America",
        "right_answer": 2
    }
];

let correctAnswers = 0;
let currentQuestion = 0;


function startQuiz() {
    document.getElementById('startScreen').style = 'display: none';
    showQuestion();
}

function showQuestion() {
    document.getElementById('questionBody').style = '';
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
    document.getElementById('progressBar').style.width = `100%`;
    document.getElementById('previousButton').disabled = true;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percentage = currentQuestion / questions.length * 100;
    document.getElementById('progressBar').style.width = `${percentage}%`;
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        correctAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    };
    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('previousButton').disabled = false;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function previousQuestion() {
    currentQuestion--;
    resetAnswerButtons();
    showQuestion();
    if(currentQuestion == 0){
        document.getElementById('previousButton').disabled = true;
    }
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartQuiz() {
    document.getElementById('startScreen').style = '';
    document.getElementById('endScreen').style = 'display: none;';
    correctAnswers = 0;
    currentQuestion = 0;
    document.getElementById('progressBar').style.width = 0;
}

function copyLink() {
    let quizLink = 'https://alex-eremie.developerakademie.net/quizapp/index.html'
    let result = navigator.clipboard.writeText(quizLink);
    showShareMessage();
}

function showShareMessage() {
    document.getElementById('linkCopiedMessage').style = '';
    document.getElementById('shareButton').style = 'display: none'
    setTimeout(() => {
        document.getElementById('linkCopiedMessage').style = 'display: none';
        document.getElementById('shareButton').style = ''
    }, 1000);
}

function underConstruction(page) {
    alert(`Sorry, our ${page} Quiz is not ready yet!`)
}