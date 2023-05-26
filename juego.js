const Reini=document.getElementById("Reini")
Reini.addEventListener("click", function(){
    alert("El juego se reiniciará");
})
document.addEventListener('keydown', (event) =>{
    const keyValue = event.code;
    console.log("You pressed: "+keyValue)
}, false);
