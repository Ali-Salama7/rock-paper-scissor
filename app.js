const yourChoiceDesplay = document.getElementById('your-choice')
const computerChoiceDesplay = document.getElementById('computer-choice')
const resultDesplay = document.getElementById('result')
const possibleBtn = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleBtn.forEach(btn => btn.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoiceDesplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDesplay.innerHTML = computerChoice
}

function generateResult() {
    if(computerChoice === userChoice) {
        result = 'Draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Win'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Loser'
    } 
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Loser'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Win'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Loser'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Win'
    }
    resultDesplay.innerHTML = result
}