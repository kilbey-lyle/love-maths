document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === 'submit') {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * This is the main game loop
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAddtionQuestion(num1, num2);
    } else {
        alert("Unknwo Game type");
        throw `unknow game type : ${gameType}. Aborting!`;
    }



}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function increamentWrongAnswer() {

}

function displayAddtionQuestion(operand1, operand2) {

    document.getElementsById("operand1").textContent = operand1;
    document.getElementsById("operand2").textContent = operand2;
    document.getElementsById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}