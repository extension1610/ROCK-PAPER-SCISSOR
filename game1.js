let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#userscore");
const compScorePara=document.querySelector("#compscore");

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const genCompChoice=()=>{
    const randIndx = Math.floor(Math.random()*3);
    const option=['rock','paper','scissor'];
    return option[randIndx];
}

const drawGame=()=>{
    msg.innerText = " It's a Draw ! Play Again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You Win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Computer wins ! You lose.Your ${userChoice} defeats by ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    // console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin= true;
        if (userChoice==="rock"){
            //paper, scissor
            userWin=compChoice==="paper" ? false : true;
        }else if(compChoice==="paper"){
            //rock, scissor
            userWin=compChoice==="scissor" ? false:true;
        }else{
             userWin = compChoice==="scissor"? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });

})
