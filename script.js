// Preloader Logic
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('preloader').classList.add('fade-out');
            }, 4000); // Preloader shows for 4 seconds
        });
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="blue";
}

const showWinner= (userWin,userChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lose . ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="brown";
}
}

const playGame =(userChoice) =>{
    console.log("user choice=",userChoice);

const compChoice =genComputerChoice();
console.log("comp choice =",compChoice);

if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        // scissor,paper
        userWin=compChoice==="paper" ? false:true;
    }
    else if(userChoice=="paper"){
      // rock,scissor
      userWin=compChoice==="scissors" ? false:true;
    }
    else{
        // rock,paper
        userWin=compChoice==="rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});


