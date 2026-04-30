
//Entities________________________________________________________________________________________________________

const player = "player"
const comp = "comp"
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

//Counters_________________________________________________________________________________________________________

let playerCount = 0
let compCount = 0
let roundCount = 0

//Conditions________________________________________________________________________________________________________

let roundWinner
let gameWinner
let gameOn = false
let three = false
let five = false
let seven = false
let warnText = false
let warnChoice = false

let rockChoice = false
let paperChoice = false
let scissorsChoice = false

let playerChoice = 0
let compChoice = 0


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

const playFieldConfirmBox = document.createElement("div")
const playFieldConfirmText = document.createElement("div")
const playFieldConfirmButton = document.createElement("button")
const playFieldChangeButton = document.createElement("button")

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

const noChoiceSelect = document.createElement("span")

rockSpritePlayer.className = "playerIcon"
paperSpritePlayer.className = "playerIcon"
scissorsSpritePlayer.className = "playerIcon"

rockSpriteComp.className = "playerIcon"
paperSpriteComp.className = "playerIcon"
scissorsSpriteComp.className = "playerIcon"

playButton.className = "playButton"

//Start_Menu_____________________________________________________________________________________________________

playButton.textContent = "PLAY"
mainBox.appendChild(playButton)


playButton.addEventListener("click", (event) => {
    event.preventDefault()

    //Start_ID/Class________________________________________________________________________________________________

    roundChoice.className = "roundChoiceClass"
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
            roundThree.className = "roundChoiceSelect"
            roundFive.className = "roundChoice"
            roundSeven.className = "roundChoice"
            gameStart.className = "gameStartSelect"
        }
    })

    roundFive.addEventListener("click", (event) => {
        event.preventDefault()

        roundSelector("five")

        if (five = true) {
            roundThree.className = "roundChoice"
            roundFive.className = "roundChoiceSelect"
            roundSeven.className = "roundChoice"
            gameStart.className = "gameStartSelect"
        }
    })

    roundSeven.addEventListener("click", (event) => {
        event.preventDefault()

        roundSelector("seven")

        if (seven = true) {
            roundThree.className = "roundChoice"
            roundFive.className = "roundChoice"
            roundSeven.className = "roundChoiceSelect"
            gameStart.className = "gameStartSelect"
        }
    })

    //Start_Button_________________________________________________________________________________________________
    gameStart.addEventListener("click", (event) => {
        event.preventDefault()

        if (three == false && five == false && seven == false && warnText == false) {
            const noRoundSelect = document.createElement("span")

            noRoundSelect.className = "warnText"
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

    scoreBoardBox.className = "scoreBoardBox"
    scoreText.className = "scoreText"
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

    playField.className = "playField"
    playFieldPlayerOneBox.className = "playFieldPlayerBox"
    playFieldPlayerTwoBox.className = "playFieldPlayerBox"
    playFieldPlayerOne.className = "playFieldPlayer"
    playFieldPlayerTwo.className = "playFieldPlayer"

    selectChoiceBox.className = "selectChoiceBox"
    selectChoiceRock.className = "selectChoice"
    selectChoicePaper.className = "selectChoice"
    selectChoiceScissors.className = "selectChoice"

    mainBox.appendChild(playField)
    playField.appendChild(playFieldPlayerOneBox)

    playFieldConfirmBox.className = "playFieldConfirmBox"
    playFieldConfirmText.className = "playFieldConfirmText"
    playFieldConfirmButton.className = "playFieldConfirmButton"

    playFieldConfirmText.textContent = ""
    playFieldConfirmButton.textContent = "CONFIRM"

    playField.appendChild(playFieldConfirmBox)
    playFieldConfirmBox.appendChild(playFieldConfirmText)
    playFieldConfirmBox.appendChild(playFieldConfirmButton)

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

//Choice_Buttons_____________________________________________________________________________________________________

function gameChoices() {

    selectChoiceRock.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.className = "gameChoiceSelected"
        selectChoicePaper.className = "gameChoiceNot"
        selectChoiceScissors.className = "gameChoiceNot"
        playFieldConfirmButton.className = "playFieldConfirmButtonSelected"

        gameChoiceRemover("rock")
        gameChoiceSelector("rock")
    })
    selectChoicePaper.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.className = "gameChoiceNot"
        selectChoicePaper.className = "gameChoiceSelected"
        selectChoiceScissors.className = "gameChoiceNot"
        playFieldConfirmButton.className = "playFieldConfirmButtonSelected"

        gameChoiceRemover("paper")
        gameChoiceSelector("paper")
    })

    selectChoiceScissors.addEventListener("click", (event) => {
        event.preventDefault()

        selectChoiceRock.className = "gameChoiceNot"
        selectChoicePaper.className = "gameChoiceNot"
        selectChoiceScissors.className = "gameChoiceSelected"
        playFieldConfirmButton.className = "playFieldConfirmButtonSelected"

        gameChoiceRemover("scissors")
        gameChoiceSelector("scissors")
    })

    //Confirm_Button__________________________________________________________________________________________________

    playFieldConfirmButton.addEventListener("click", (event) => {
        if (rockChoice == false && paperChoice == false && scissorsChoice == false && warnChoice == false) {

            playFieldConfirmText.className = "warnChoice"
            playFieldConfirmText.textContent = "Please select an Element!"


            warnChoice = true
        }
        else if (rockChoice == false && paperChoice == false && scissorsChoice == false) { return }
        else {
            if (warnChoice == true) {
                playFieldConfirmText.textContent = ""
            }
            gameInit()
        }
    })
}

//Game_Initializer______________________________________________________________________________________________

function gameInit() {
    getPlayerChoice()
    getComputerChoice()
    winCondition(playerChoice, compChoice)
    compIconChanger()
    roundChanger()
}

//Choice_Selector_______________________________________________________________________________________________

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
    else { }
}

function getPlayerChoice() {
    if (rockChoice == true) {
        playerChoice = 1
    }
    else if (paperChoice == true) {
        playerChoice = 2
    }
    else if (scissorsChoice == true) {
        playerChoice = 3
    }
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        compChoice = 1 //rock
    }
    else if (randomNumber == 1) {
        compChoice = 2 //paper
    }
    else {
        compChoice = 3 //scissors
    }
    return compChoice
}

//Game_Logic____________________________________________________________________________________________________

function winCondition(player, comp) {
    if (player == comp) {
        roundWinner = "draw"
    }
    else if (player == 1 && comp == 2) {
        roundWinner = "comp"
    }
    else if (player == 2 && comp == 1) {
        roundWinner = "player"
    }
    else if (player == 1 && comp == 3) {
        roundWinner = "player"
    }
    else if (player == 3 && comp == 1) {
        roundWinner = "comp"
    }
    else if (player == 2 && comp == 3) {
        roundWinner = "comp"
    }
    else if (player == 3 && comp == 2) {
        roundWinner = "player"
    }
    console.log(roundWinner)
}

//Play_Field_Changer________________________________________________________________________________________

function roundChanger() {
    playFieldConfirmBox.removeChild(playFieldConfirmButton)
    playFieldConfirmBox.appendChild(playFieldChangeButton)

    playFieldChangeButton.textContent = "NEXT ROUND"
    playFieldChangeButton.className = "playFieldConfirmButtonSelected"

    playFieldChangeButton.addEventListener("click", (event) => {
        event.preventDefault()

        playFieldConfirmBox.removeChild(playFieldChangeButton)

        if (rockChoice == true) {
            playFieldPlayerOne.removeChild(rockSpritePlayer)

            rockChoice = false
        }
        else if (paperChoice == true) {
            playFieldPlayerOne.removeChild(paperSpritePlayer)

            paperChoice = false
        }
        else if (scissorsChoice == true) {
            playFieldPlayerOne.removeChild(scissorsSpritePlayer)

            scissorsChoice = false
        }

        if (compChoice == 1) {
            playFieldPlayerTwo.removeChild(rockSpriteComp)
        }
        else if (compChoice == 2) {
            playFieldPlayerTwo.removeChild(paperSpriteComp)
        }
        else if (compChoice == 3) {
            playFieldPlayerTwo.removeChild(scissorsSpriteComp)
        }
        compChoice = 0
        playerChoice = 0
        warnChoice = false

        scoreBoard()
    })
}

//Play_Field_Comp_Icon________________________________________________________________________________________

function compIconChanger() {
    if (compChoice == 1) {
        playFieldPlayerTwo.appendChild(rockSpriteComp)
    }
    else if (compChoice == 2) {
        playFieldPlayerTwo.appendChild(paperSpriteComp)
    }
    else if (compChoice == 3) {
        playFieldPlayerTwo.appendChild(scissorsSpriteComp)
    }
}