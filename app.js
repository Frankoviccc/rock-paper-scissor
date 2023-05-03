const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4)

    if(randomNumber === 1){
        computerChoice = 'rock'
    } else if(randomNumber === 2){
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice){
        result = 'draw!'
    } else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'user won!'
    } else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'computer won!'
    } else if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'user won!'
    } else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'computer won!'
    } else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'user won!'
    } else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'computer won!'
    }
    resultDisplay.innerHTML = result
}