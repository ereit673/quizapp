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

let currentQuestion = 0;

function init(){
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    if(selectedQuestionNumber == question['right_answer']){
        console.log('Richtige Antwort!')
    } else {
        console.log('Falsche Antwort!')
    };
}