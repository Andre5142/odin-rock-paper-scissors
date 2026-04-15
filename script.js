
//Entities________________________________________________________________________________________________________
const player = "player"
const comp = "comp"
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

//Counters_________________________________________________________________________________________________________
let player_count = 0
let comp_count = 0
let round_count = 0

//Conditions________________________________________________________________________________________________________
let round_winner
let gameOn = false

//Elements________________________________________________________________________________________________________
const mainBox = document.querySelector("#mainBox")
const playButton = document.querySelector("#playButton")

//Start_Menu_____________________________________________________________________________________________________

playButton.addEventListener("click", (event) =>{
    event.preventDefault()

    const roundChoice = document.createElement("div")
    const roundThree = document.createElement("button")
    const roundFive = document.createElement("button")
    const roundSeven = document.createElement("button")
    const gameStart = document.createElement("button")

    roundThree.textContent= "3 Rounds"
    roundFive.textContent= "5 Rounds"
    roundSeven.textContent= "7 Rounds"

    roundChoice.appendChild(roundThree)
    roundChoice.appendChild(roundFive)
    roundChoice.appendChild(roundSeven)

    mainBox.appendChild(roundChoice)
    mainBox.appendChild(gameStart)

    console.log("ok")

})


//Game_Logic____________________________________________________________________________________________________
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
    player_choice = prompt("1 = 'rock' 2 = 'paper' 3 = 'scissors'")     //change
    return parseInt(player_choice % 3)
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
    round_count++
}
