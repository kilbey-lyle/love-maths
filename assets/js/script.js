document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === 'submit') {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function increamentWrongAnswer() {

}

function displayAddtionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}