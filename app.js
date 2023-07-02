const playerInput = document.querySelector(".user");
const submit = document.querySelector(".submit");
const lResults = document.querySelector(".lastResults");
const answer = document.querySelector(".answer");
const condition = document.querySelector(".hlValue");
let resetButton = document.querySelector("#reset")

let guessCount = 1;

let randomNumber = Math.floor(Math.random() * 50) + 1;

function checkAnswer() {
    playerInput.focus();
    let playerGuess = Number(playerInput.value);

    if (guessCount === 1) {
        lResults.textContent = "Previous guesses: ";
    }

    conditionCheck(playerGuess, randomNumber);

    lResults.textContent += `${playerGuess} `;


    guessCount++;
    playerInput.value = "";
}

submit.addEventListener("click", checkAnswer);

function conditionCheck(guess, rdn) {
    if (guess === rdn) {
        answer.textContent = "Congratulations ! You got it right.. !";
        answer.style.color = "green";
        condition.textContent = "";
        startOver()
    }
    
    else if (guessCount === 9) {
        alert(`You have one chance to guess the right number.`)
    }
    
    else if (guessCount === 10) {
        answer.textContent = "Game Over !!!";
        condition.textContent = "";
        startOver();
    }


    else {
        answer.textContent = "Wrong!";
        answer.style.color = "red";
        if (guess > randomNumber) {
            condition.textContent = "Last guess was too high."
        }
        else if (guess < randomNumber) {
            condition.textContent = "Last guess was too low."
        }
    }
}

function startOver() {
    playerInput.disabled = true;
    submit.disabled = true;
    resetButton.textContent = "Start a new game";
    resetButton.classList.add("btn", "btn-primary", "display-4", "mt-2");
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
    resetButton.parentNode.removeChild(resetButton)
    const resPar = document.querySelectorAll(".resultPara p")
    playerInput.disabled = false;
    submit.disabled = false;
    for (const res of resPar) {
        res.textContent = "";
    }
    playerInput.value = "";
    playerInput.focus();
    randomNumber = Math.floor(Math.random() * 50) + 1;
}

