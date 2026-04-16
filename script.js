
//Entities________________________________________________________________________________________________________

const player = "player"
const comp = "comp"
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

//Counters_________________________________________________________________________________________________________

let player_count = 0
let comp_count = 0
let roundCount = 0

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
    const gameStartBox = document.createElement("div")
    const gameStart = document.createElement("button")

    //Start_ID/Class________________________________________________________________________________________________

    roundChoice.id = "roundChoice"
    roundThree.className = "roundChoice"
    roundFive.className = "roundChoice"
    roundSeven.className = "roundChoice"
    gameStartBox.className = "gameStartBox"
    gameStart.className = "gameStart"


    //Start_Context__________________________________________________________________________________________________

    roundThree.textContent = "3 Rounds"
    roundFive.textContent = "5 Rounds"
    roundSeven.textContent = "7 Rounds"
    gameStart.textContent = "START"

    roundChoice.appendChild(roundThree)
    roundChoice.appendChild(roundFive)
    roundChoice.appendChild(roundSeven)

    gameStartBox.appendChild(gameStart)

    mainBox.appendChild(roundChoice)
    mainBox.appendChild(gameStartBox)

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

    //Start_Button_________________________________________________________________________________________________
    gameStart.addEventListener("click", (event) => {
        event.preventDefault()

        if (three == false && five == false && seven == false && warnText == false) {
            const noRoundSelect = document.createElement("span")

            noRoundSelect.id = "warnText"
            noRoundSelect.textContent = "Please select a round limit!"

            gameStartBox.appendChild(noRoundSelect)
            warnText = true
        }
        else if (three == false && five == false && seven == false){}
        else {
            mainBox.removeChild(roundChoice)
            mainBox.removeChild(gameStartBox)
            
            mainGame()
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

//Main_Game_______________________________________________________________________________________________________

function mainGame() {

    //Scoreboard__________________________________________________________________________________________________

    const scoreBoardBox = document.createElement("div")
    const scoreText = document.createElement("span")
    const scorePointOne = document.createElement("div")
    const scorePointTwo = document.createElement("div")
    const scorePointThree = document.createElement("div")
    const scorePointFour = document.createElement("div")
    const scorePointFive = document.createElement("div")
    const scorePointSix = document.createElement("div")
    const scorePointSeven = document.createElement("div")

    scoreBoardBox.id = "scoreBoardBox"
    scoreText.id = "scoreText"
    scorePointOne.className = "scorePoint"
    scorePointTwo.className = "scorePoint"
    scorePointThree.className = "scorePoint"
    scorePointFour.className = "scorePoint"
    scorePointFive.className = "scorePoint"
    scorePointSix.className = "scorePoint"
    scorePointSeven.className = "scorePoint"

    scorePointOne.textContent = ""
    scorePointTwo.textContent = ""
    scorePointThree.textContent = ""
    scorePointFour.textContent = ""
    scorePointFive.textContent = ""
    scorePointSix.textContent = ""
    scorePointSeven.textContent = ""
    scoreText.textContent = "SCORE"
    mainBox.appendChild(scoreText)
    mainBox.appendChild(scoreBoardBox)

    scoreBoardBox.appendChild(scorePointOne)
    scoreBoardBox.appendChild(scorePointTwo)
    scoreBoardBox.appendChild(scorePointThree)

    if (five == true) {
        scoreBoardBox.appendChild(scorePointFour)
        scoreBoardBox.appendChild(scorePointFive)
    }
    if (seven == true) {
        scoreBoardBox.appendChild(scorePointFour)
        scoreBoardBox.appendChild(scorePointFive)
        scoreBoardBox.appendChild(scorePointSix)
        scoreBoardBox.appendChild(scorePointSeven)
    }

    //Playing_field_____________________________________________________________________________________________________

    const playField = document.createElement("div")
    const playFieldPlayerOneBox = document.createElement("div")
    const playFieldPlayerTwoBox = document.createElement("div")
    const playFieldPlayerOneText = document.createElement("span")
    const playFieldPlayerTwoText = document.createElement("span")
    const playFieldPlayerOne = document.createElement("div")
    const playFieldPlayerTwo = document.createElement("div")

    playFieldPlayerOneText.textContent = "You"
    playFieldPlayerTwoText.textContent = "ComPlayer"

    playField.id = "playField"
    playFieldPlayerOneBox.id = "playFieldPlayerBox"
    playFieldPlayerTwoBox.id = "playFieldPlayerBox"
    playFieldPlayerOne.id = "playFieldPlayer"
    playFieldPlayerTwo.id = "playFieldPlayer"

    mainBox.appendChild(playField)
    playField.appendChild(playFieldPlayerOneBox)
    playField.appendChild(playFieldPlayerTwoBox)
    playFieldPlayerOneBox.appendChild(playFieldPlayerOneText)
    playFieldPlayerOneBox.appendChild(playFieldPlayerOne)
    playFieldPlayerTwoBox.appendChild(playFieldPlayerTwoText)
    playFieldPlayerTwoBox.appendChild(playFieldPlayerTwo)
}
