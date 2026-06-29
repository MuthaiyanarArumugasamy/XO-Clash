const cells = document.querySelectorAll(".cell");
const turnText = document.querySelector(".turn");
const restartBtn = document.querySelector(".restart");

let currentPlayer = "X";
let gameActive = true;

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

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

cells.forEach((cell,index)=>{

    cell.addEventListener("click",()=>{

        if(board[index]!=="" || !gameActive)
            return;

        board[index]=currentPlayer;

        cell.innerHTML=currentPlayer;

        if(currentPlayer==="X"){

            cell.style.color="#00E5FF";

        }else{

            cell.style.color="#FF4081";

        }

        checkWinner();

    });

});

function checkWinner(){

    let winner=false;

    winPatterns.forEach(pattern=>{

        const a=pattern[0];
        const b=pattern[1];
        const c=pattern[2];

        if(
            board[a]!=="" &&
            board[a]===board[b] &&
            board[a]===board[c]
        ){

            winner=true;

            gameActive=false;

            cells[a].style.background="#00ff99";
            cells[b].style.background="#00ff99";
            cells[c].style.background="#00ff99";

            setTimeout(()=>{

                alert(currentPlayer+" Wins!");

            },200);

        }

    });

    if(winner) return;

    if(!board.includes("")){

        gameActive=false;

        setTimeout(()=>{

            alert("Match Draw!");

        },200);

        return;

    }

    currentPlayer=currentPlayer==="X"?"O":"X";

    turnText.innerHTML="Player "+currentPlayer+" Turn";

}

restartBtn.addEventListener("click",()=>{

    board=["","","","","","","","",""];

    gameActive=true;

    currentPlayer="X";

    turnText.innerHTML="Player X Turn";

    cells.forEach(cell=>{

        cell.innerHTML="";

        cell.style.background="#111827";

    });

});
