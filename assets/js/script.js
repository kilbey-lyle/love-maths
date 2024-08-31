document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === 'submit') {
                checkAnswer();
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
        displayAdditionQuestion(num1, num2);
    } else {
        alert("Unknown Game type");
        throw `unknown game type : ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = (userAnswer === calculatedAnswer[0]);

    if (isCorrect) {
        alert('Woop, Woop.....Correct');
        incrementScore();
    } else {
        alert(`Booooo.... you answer ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    
    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }

}

function incrementScore() {
    let currentScore = parseInt(document.getElementById('score').textContent);
    document.getElementById('score').textContent = ++currentScore;
}

function incrementWrongAnswer() {
    let currentIncorrectScore = parseInt(document.getElementById('incorrect').textContent);
    document.getElementById('incorrect').textContent = ++currentIncorrectScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}