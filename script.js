const player = "player"
const comp = "comp"
const rock = "rock"
const paper = "paper"
const scissors = "scissors"
let player_count = 0
let comp_count = 0

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber <= 33) {
        comp_choice = 1 //rock
    }
    else if (randomNumber >= 34 && randomNumber <= 66) {
        comp_choice = 2 //paper
    }
    else {
        comp_choice = 3 //scissors
    }
    return comp_choice
}

function getPlayerChoice() {
    player_choice = prompt("1 = 'rock' 2 = 'paper' 3 = 'scissors'")
    return player_choice
}

function winCondition(player, comp) {
    if (player == comp) {
        round_winner = "draw"
    }
    else if (player == 1 && comp == 2) {
        round_winner = "comp"
        comp_count++
    }
    else if (player == 2 && comp == 1) {
        round_winner = "player"
        player_count++
    }
    else if (player == 1 && comp == 3) {
        round_winner = "player"
        player_count++
    }
    else if (player == 3 && comp == 1) {
        round_winner = "comp"
        comp_count++
    }
    else if (player == 2 && comp == 3) {
        round_winner = "comp"
        comp_count++
    }
    else if (player == 3 && comp == 2) {
        round_winner = "player"
        player_count++
    }
    return round_winner
}

console.log(getComputerChoice(), getPlayerChoice())
console.log(winCondition(getComputerChoice(), getPlayerChoice()))
console.log()

