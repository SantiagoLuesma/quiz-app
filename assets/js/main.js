// Getting all required elements
const startButton = document.querySelector('#startButton'),
    box = document.querySelector('#box'),
    buttonExit = box.querySelector('.button__exit'),
    buttonContinue = box.querySelector('.button__continue'),
    quiz = document.querySelector('#quiz');

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
    // box.classList.remove('active-box'); // Hide the box
    quiz.classList.add('active-quiz'); // Show the Quiz
}