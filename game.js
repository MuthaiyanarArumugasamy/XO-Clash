const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";

cells.forEach(cell=>{

cell.addEventListener("click",()=>{

if(cell.innerHTML!="") return;

cell.innerHTML=currentPlayer;

if(currentPlayer=="X"){

cell.style.color="#00ffff";

currentPlayer="O";

}
else{

cell.style.color="#ff4df0";

currentPlayer="X";

}

document.querySelector(".turn").innerHTML="Player "+currentPlayer+" Turn";

});

});
