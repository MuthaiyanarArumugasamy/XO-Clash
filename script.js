const buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.95)";

setTimeout(()=>{

button.style.transform="scale(1.05)";

},100);

});

});
