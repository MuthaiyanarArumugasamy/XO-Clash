const winnerPopup=document.getElementById("winnerPopup");
const winnerTitle=document.getElementById("winnerTitle");
const nextRound=document.getElementById("nextRound");
// ==============================
// XO CLASH - GAME.JS (Version 1)
// ==============================

const cells = document.querySelectorAll(".cell");
const turnText = document.getElementById("turn");
const restartBtn = document.querySelector(".restart");

const xScoreText = document.getElementById("xScore");
const oScoreText = document.getElementById("oScore");
const drawScoreText = document.getElementById("drawScore");
const coinsText = document.getElementById("coins");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

let xScore = 0;
let oScore = 0;
let drawScore = 0;
let coins = 500;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Cell Click
cells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{

        if(board[index]!=="" || !gameActive){
            return;
        }

        board[index]=currentPlayer;

        cell.innerHTML=currentPlayer;

        if(currentPlayer==="X"){
            cell.style.color="#00E5FF";
        }else{
            cell.style.color="#FF4081";
        }

        cell.style.transform="scale(1.1)";

        setTimeout(()=>{
            cell.style.transform="scale(1)";
        },150);

        checkWinner();

    });

});

// Check Winner
function checkWinner(){

    for(let pattern of winPatterns){

        let a=pattern[0];
        let b=pattern[1];
        let c=pattern[2];

        if(
            board[a]!=="" &&
            board[a]===board[b] &&
            board[a]===board[c]
        ){

            gameActive=false;

            cells[a].style.background="#00ff99";
            cells[b].style.background="#00ff99";
            cells[c].style.background="#00ff99";

            if(currentPlayer==="X"){

                xScore++;
                coins += 100;

                xScoreText.innerHTML=xScore;

            }else{

                oScore++;
                coins += 100;

                oScoreText.innerHTML=oScore;

            }

            coinsText.innerHTML=coins;

            setTimeout(()=>{

                alert("🎉 Player "+currentPlayer+" Wins!");

            },300);

            return;

        }

    }

    // Draw

    if(!board.includes("")){

        drawScore++;

        drawScoreText.innerHTML=drawScore;

        coins += 20;

        coinsText.innerHTML=coins;

        gameActive=false;

        setTimeout(()=>{

            alert("🤝 Match Draw!");

        },300);

        return;

    }

    currentPlayer=currentPlayer==="X"?"O":"X";

    turnText.innerHTML="Player "+currentPlayer+" Turn";

}

// Restart
restartBtn.addEventListener("click",restartGame);

function restartGame(){

    board=["","","","","","","","",""];

    gameActive=true;

    currentPlayer="X";

    turnText.innerHTML="Player X Turn";

    cells.forEach(cell=>{

        cell.innerHTML="";

        cell.style.background="#111827";

        cell.style.color="white";

    });

}
