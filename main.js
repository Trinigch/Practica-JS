const inputColor = document.querySelector('#inputColor')
const botonVisualizar = document.querySelector('#botonVisualizar')
const parrafoExa = document.querySelector('#parrafoExa') 
const cardColor = document.querySelector('#cardColor') 

console.log(inputColor)
console.log(botonVisualizar)
console.log(parrafoExa)
console.log(cardColor)

console.log(inputColor.value);
botonVisualizar.addEventListener("click", ()=>{
    console.log("me diste click");
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value; 
});