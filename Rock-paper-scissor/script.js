let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const msg = document.querySelector('#msg')
const genCompChoice = ()=> {
    const options = ["rock","paper","scissors"]
    const randomId = Math.floor(Math.random()*3)
   return options[randomId]
}
const showWinner = (winner) => {
    if(winner){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = "You Won"
        msg.style.background ="#06D6A0"
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = "You Loss"
        msg.style.background ="#FF6978"
    }
    console.log("userScore",userScore)
    console.log("compScore",compScore)
}
const drawGame = () => {
    msg.innerText = "Its a Draw"
    msg.style.background = "#26547C"
}
const startGame = (userChoice)=>{
    console.log(userChoice)
    const compChoice = genCompChoice()
    console.log("comp choice",compChoice)
    if(userChoice == compChoice){
        drawGame()
    }
    else{
        let isWin = true
        if(userChoice == "rock"){
            // comp choice -> paper, scissors
            isWin = compChoice == "paper" ? false : true
        }
        else if(userChoice == "paper"){
            // comp choice -> rock, scissor
            isWin = compChoice == "scissor" ? false : true
        }
        else{
            // ->paper,rock
            isWin = compChoice == "rock" ? false : true
        }
        showWinner(isWin)
    }
   
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id")
        console.log("clicked",choiceId)
        startGame(choiceId)
    })
})