
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

let rockChoice = false
let paperChoice = false
let scissorsChoice = false


//Elements________________________________________________________________________________________________________

const mainBox = document.querySelector("#mainBox")
const playButton = document.createElement("button")

//StartMenu
const roundChoice = document.createElement("div")
const roundThree = document.createElement("button")
const roundFive = document.createElement("button")
const roundSeven = document.createElement("button")
const gameStartBox = document.createElement("div")
const gameStart = document.createElement("button")

//ScoreBoard
const scoreBoardBox = document.createElement("div")
const scoreText = document.createElement("span")
const scorePointOne = document.createElement("div")
const scorePointTwo = document.createElement("div")
const scorePointThree = document.createElement("div")
const scorePointFour = document.createElement("div")
const scorePointFive = document.createElement("div")
const scorePointSix = document.createElement("div")
const scorePointSeven = document.createElement("div")

//PlayField
const playField = document.createElement("div")
const playFieldPlayerOneBox = document.createElement("div")
const playFieldPlayerTwoBox = document.createElement("div")
const playFieldPlayerOneText = document.createElement("span")
const playFieldPlayerTwoText = document.createElement("span")
const playFieldPlayerOne = document.createElement("div")
const playFieldPlayerTwo = document.createElement("div")

const selectChoiceBox = document.createElement("div")
const selectChoiceRock = document.createElement("button")
const selectChoicePaper = document.createElement("button")
const selectChoiceScissors = document.createElement("button")

//sprites
//choice
const rockSprite = document.createElement("img")
const paperSprite = document.createElement("img")
const scissorsSprite = document.createElement("img")
rockSprite.src = "./icons/stone-96.png"
paperSprite.src = "./icons/paper-48.png"
scissorsSprite.src = "./icons/scissors-64.png"

//player
const rockSpritePlayer = document.createElement("img")
const paperSpritePlayer = document.createElement("img")
const scissorsSpritePlayer = document.createElement("img")
rockSpritePlayer.src = "./icons/stone-96.png"
paperSpritePlayer.src = "./icons/paper-48.png"
scissorsSpritePlayer.src = "./icons/scissors-64.png"

//comp
const rockSpriteComp = document.createElement("img")
const paperSpriteComp = document.createElement("img")
const scissorsSpriteComp = document.createElement("img")
rockSpriteComp.src = "./icons/stone-96.png"
paperSpriteComp.src = "./icons/paper-48.png"
scissorsSpriteComp.src = "./icons/scissors-64.png"

rockSpritePlayer.id = "playerIcon"
paperSpritePlayer.id = "playerIcon"
scissorsSpritePlayer.id = "playerIcon"


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
        else if (three == false && five == false && seven == false) { }
        else {
            mainBox.removeChild(roundChoice)
            mainBox.removeChild(gameStartBox)

            scoreBoard()
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

function scoreBoard() {

    //Scoreboard__________________________________________________________________________________________________

    scoreBoardBox.id = "scoreBoardBox"
    scoreText.id = "scoreText"
    scorePointOne.className = "scorePoint"
    scorePointTwo.className = "scorePoint"
    scorePointThree.className = "scorePoint"
    scorePointFour.className = "scorePoint"
    scorePointFive.className = "scorePoint"
    scorePointSix.className = "scorePoint"
    scorePointSeven.className = "scorePoint"

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
    playingField()
}

//Playing_field_____________________________________________________________________________________________________

function playingField() {

    playFieldPlayerOneText.textContent = "You"
    playFieldPlayerTwoText.textContent = "ComPlayer"

    selectChoiceRock.appendChild(rockSprite)
    selectChoicePaper.appendChild(paperSprite)
    selectChoiceScissors.appendChild(scissorsSprite)

    playField.id = "playField"
    playFieldPlayerOneBox.id = "playFieldPlayerBox"
    playFieldPlayerTwoBox.id = "playFieldPlayerBox"
    playFieldPlayerOne.id = "playFieldPlayer"
    playFieldPlayerTwo.id = "playFieldPlayer"

    selectChoiceBox.id = "selectChoiceBox"
    selectChoiceRock.id = "selectChoice"
    selectChoicePaper.id = "selectChoice"
    selectChoiceScissors.id = "selectChoice"

    mainBox.appendChild(playField)
    playField.appendChild(playFieldPlayerOneBox)
    playField.appendChild(playFieldPlayerTwoBox)
    playFieldPlayerOneBox.appendChild(playFieldPlayerOneText)
    playFieldPlayerOneBox.appendChild(playFieldPlayerOne)
    playFieldPlayerTwoBox.appendChild(playFieldPlayerTwoText)
    playFieldPlayerTwoBox.appendChild(playFieldPlayerTwo)

    mainBox.appendChild(selectChoiceBox)
    selectChoiceBox.appendChild(selectChoiceRock)
    selectChoiceBox.appendChild(selectChoicePaper)
    selectChoiceBox.appendChild(selectChoiceScissors)

    gameChoices()
}

function gameChoices() {

    selectChoiceRock.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.id = "gameChoiceSelected"
        selectChoicePaper.id = "gameChoiceNot"
        selectChoiceScissors.id = "gameChoiceNot"

        gameChoiceRemover("rock")
        gameChoiceSelector("rock")
    })
    selectChoicePaper.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.id = "gameChoiceNot"
        selectChoicePaper.id = "gameChoiceSelected"
        selectChoiceScissors.id = "gameChoiceNot"

        gameChoiceRemover("paper")
        gameChoiceSelector("paper")
    })

    selectChoiceScissors.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.id = "gameChoiceNot"
        selectChoicePaper.id = "gameChoiceNot"
        selectChoiceScissors.id = "gameChoiceSelected"

        gameChoiceRemover("scissors")
        gameChoiceSelector("scissors")
    })

}


function gameChoiceSelector(choice) {

    if (choice == "rock") {
        rockChoice = true
        paperChoice = false
        scissorsChoice = false

        playFieldPlayerOne.appendChild(rockSpritePlayer)
    }
    else if (choice == "paper") {
        rockChoice = false
        paperChoice = true
        scissorsChoice = false
       
        playFieldPlayerOne.appendChild(paperSpritePlayer)
    }
    else {
        rockChoice = false
        paperChoice = false
        scissorsChoice = true

        playFieldPlayerOne.appendChild(scissorsSpritePlayer)
    }
}

function gameChoiceRemover(keep) {

    if (keep == "rock" && paperChoice == true) {
        playFieldPlayerOne.removeChild(paperSpritePlayer)
    }
    else if (keep == "rock" && scissorsChoice == true) {
        playFieldPlayerOne.removeChild(scissorsSpritePlayer)
    }
    else if (keep == "paper" && rockChoice == true) {
        playFieldPlayerOne.removeChild(rockSpritePlayer)
    }
    else if (keep == "paper" && scissorsChoice == true) {
        playFieldPlayerOne.removeChild(scissorsSpritePlayer)
    }
    else if (keep == "scissors" && rockChoice == true) {
        playFieldPlayerOne.removeChild(rockSpritePlayer)
    }
    else if (keep == "scissors" && paperChoice == true) {
        playFieldPlayerOne.removeChild(paperSpritePlayer)
    }
    else{}
}