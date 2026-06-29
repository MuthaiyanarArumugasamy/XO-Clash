// ================================
// XO CLASH - GAME.JS (Version 2.0)
// ================================

// Elements
const cells = document.querySelectorAll(".cell");
const turnText = document.getElementById("turn");
const restartBtn = document.querySelector(".restart");

const xScoreText = document.getElementById("xScore");
const oScoreText = document.getElementById("oScore");
const drawScoreText = document.getElementById("drawScore");
const coinsText = document.getElementById("coins");

const winnerPopup = document.getElementById("winnerPopup");
const winnerTitle = document.getElementById("winnerTitle");
const nextRound = document.getElementById("nextRound");

// Variables
let currentPlayer = "X";
let gameActive = true;

let board = ["","","","","","","","",""];

let xScore = 0;
let oScore = 0;
let drawScore = 0;
let coins = 500;

// Win Patterns
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

        if(!gameActive) return;

        if(board[index]!="") return;

        board[index]=currentPlayer;

        cell.innerHTML=currentPlayer;

        cell.style.transform="scale(1.15)";

        setTimeout(()=>{

            cell.style.transform="scale(1)";

        },150);

        if(currentPlayer=="X"){

            cell.style.color="#00E5FF";

        }else{

            cell.style.color="#FF4081";

        }

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
            board[a]!="" &&
            board[a]==board[b] &&
            board[a]==board[c]
        ){

            gameActive=false;

            cells[a].style.background="#00FF99";
            cells[b].style.background="#00FF99";
            cells[c].style.background="#00FF99";

            if(currentPlayer=="X"){

                xScore++;

                xScoreText.innerHTML=xScore;

            }else{

                oScore++;

                oScoreText.innerHTML=oScore;

            }

            coins+=100;

            coinsText.innerHTML=coins;

            winnerTitle.innerHTML="🏆 Player "+currentPlayer+" Wins!";

            winnerPopup.style.display="flex";

            return;

        }

    }

    // Draw

    if(!board.includes("")){

        drawScore++;

        drawScoreText.innerHTML=drawScore;

        coins+=20;

        coinsText.innerHTML=coins;

        gameActive=false;

        winnerTitle.innerHTML="🤝 Match Draw!";

        winnerPopup.style.display="flex";

        return;

    }

    // Change Player

    currentPlayer=currentPlayer=="X" ? "O":"X";

    turnText.innerHTML="Player "+currentPlayer+" Turn";

}

// Restart Button
restartBtn.addEventListener("click",restartGame);

// Next Round Button
nextRound.addEventListener("click",()=>{

    winnerPopup.style.display="none";

    restartGame();

});

// Restart Game
function restartGame(){

    board=["","","","","","","","",""];

    currentPlayer="X";

    gameActive=true;

    turnText.innerHTML="Player X Turn";

    cells.forEach(cell=>{

        cell.innerHTML="";

        cell.style.background="#111827";

        cell.style.color="white";

        cell.style.transform="scale(1)";

    });

}

// ============================
// Future Functions (Coming)
// ============================

// AI
function startAI(){

}

// Sound
function playSound(sound){

}

// Save Data
function saveGame(){

}

// Load Data
function loadGame(){

}

// Theme
function changeTheme(theme){

}
