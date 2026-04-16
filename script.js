
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
let three = false
let five = false
let seven = false
let warnText = false

//Elements________________________________________________________________________________________________________

const mainBox = document.querySelector("#mainBox")
const playButton = document.createElement("button")

playButton.id = "playButton"

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

//Start_Menu_____________________________________________________________________________________________________

playButton.textContent = "PLAY"
mainBox.appendChild(playButton)


playButton.addEventListener("click", (event) => {
    event.preventDefault()

    const roundChoice = document.createElement("div")
    const roundThree = document.createElement("button")
    const roundFive = document.createElement("button")
    const roundSeven = document.createElement("button")
    const gameStart = document.createElement("button")

    //Start_ID/Class___________________________________________________________________________________________________

    roundChoice.id = "roundChoice"
    roundThree.className = "roundChoice"
    roundFive.className = "roundChoice"
    roundSeven.className = "roundChoice"
    gameStart.className = "roundConfirm"


    //Start_Context__________________________________________________________________________________________________

    roundThree.textContent = "3 Rounds"
    roundFive.textContent = "5 Rounds"
    roundSeven.textContent = "7 Rounds"
    gameStart.textContent = "START"

    roundChoice.appendChild(roundThree)
    roundChoice.appendChild(roundFive)
    roundChoice.appendChild(roundSeven)

    mainBox.appendChild(roundChoice)
    mainBox.appendChild(gameStart)

    mainBox.removeChild(playButton)


    //Round_Choice___________________________________________________________________________________________________

    roundThree.addEventListener("click", (event) => {
        event.preventDefault()

        roundSelector("three")

        if (three = true) {
            roundThree.id = "roundChoiceSelect"
            roundFive.id = "roundChoiceNot"
            roundSeven.id = "roundChoiceNot"
            gameStart.id = "roundChoiceSelect"
        }
    })

    roundFive.addEventListener("click", (event) => {
        event.preventDefault()

        roundSelector("five")

        if (five = true) {
            roundThree.id = "roundChoiceNot"
            roundFive.id = "roundChoiceSelect"
            roundSeven.id = "roundChoiceNot"
            gameStart.id = "roundChoiceSelect"
        }
    })

    roundSeven.addEventListener("click", (event) => {
        event.preventDefault()

        roundSelector("seven")

        if (seven = true) {
            roundThree.id = "roundChoiceNot"
            roundFive.id = "roundChoiceNot"
            roundSeven.id = "roundChoiceSelect"
            gameStart.id = "roundChoiceSelect"
        }
    })

    gameStart.addEventListener("click", (event) => {
        event.preventDefault()

        if (three == false && five == false && seven == false && warnText == false){
            const noRoundSelect = document.createElement("span")

            noRoundSelect.id = "warnText"
            noRoundSelect.textContent = "Please select a round limit!"
            
            mainBox.appendChild(noRoundSelect)
            warnText = true
        }
        else{

        }
})
})

//Round_Select______________________________________________________________________________________________________

function roundSelector(round) {
    if (round = "three") {
        three = true
        five = false
        seven = false
        return "three"
    }
    else if (round = "five") {
        three = false
        five = true
        seven = false
        return "five"
    }
    else {
        three = false
        five = false
        seven = true
        return "seven"
    }
}

//Main_Game____________________________________________________________________________________________________________

