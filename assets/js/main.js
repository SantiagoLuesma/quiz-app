// Getting all required elements
// Constantes
const startButton = document.querySelector('#startButton'),
    box = document.querySelector('#box'),
    buttonExit = box.querySelector('.button__exit'),
    buttonContinue = box.querySelector('.button__continue'),
    quiz = document.querySelector('#quiz'),
    questionNext = quiz.querySelector('#questionNext');

// Variables
let questionCount = 0,
    questionNumber = 1,
    questionsLength = questions.length;

// If Start Quiz button clicked
startButton.onclick = () => {
    box.classList.add('active-box'); // Show the box
}


// If Exit Button clicked
buttonExit.onclick = () => {
    box.classList.remove('active-box'); // Hide the box
}


// If Continue Button clicked
buttonContinue.onclick = () => {
    box.classList.remove('active-box'); // Hide the box
    quiz.classList.add('active-quiz'); // Show the Quiz
    showQuestions(0);
    questionsCounter(1);
}

// If next button clicked
questionNext.onclick = () => {
    if(questionCount < questionsLength - 1) {
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        questionsCounter(questionNumber);
    }else{
        console.log('Questions completed')
    }
    /* questionCount++;
    showQuestions(questionCount); */
}



// Getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('#questionText');
    const questionList = document.querySelector('#questionList');
    let questionTitle = `<span>${questions[index].numb}. ${questions[index].question} </span>`;
    let questionOption = `
    <div class='question__option'>
        <span>${questions[index].options[0]}</span>
        <div class='question__option-icon question__option-tick'><i class='fas fa-check'></i></div>
    </div>

    <div class='question__option'>
        <span>${questions[index].options[1]}</span>
        <div class='question__option-icon question__option-cross'><i class='fas fa-times'></i></div>
    </div>

    <div class='question__option'>
        <span>${questions[index].options[2]}</span>
        <div class='question__option-icon question__option-cross'><i class='fas fa-times'></i></div>
    </div>

    <div class='question__option'>
        <span>${questions[index].options[3]}</span>
        <div class='question__option-icon question__option-cross'><i class='fas fa-times'></i></div>
    </div>
    `;
    questionText.innerHTML = questionTitle;
    questionList.innerHTML = questionOption;

    const option = questionList.querySelectorAll('.question__option');
    const optionLength = option.length;

    for (let i = 0; i < optionLength; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function questionsCounter(index) {
    const questionScoreTotal = quiz.querySelector('#questionScoreTotal');
    let questionScoreText = `<p class="question__score-text"><span>${index}</span> of <span>${questionsLength}</span> Questions</p>`;
    questionScoreTotal.innerHTML = questionScoreText;
}

