// Constantes
const currentDate = new Date()
const currentYear = currentDate.getFullYear()

// Idade
var idadeBox    = document.querySelector("#idade")
const birthDate = 2005
idadeBox.innerHTML = `<b>Idade:</b> ${currentYear - birthDate} Anos`

// Remover foto e navbar  para dispositivos móveis
if (window.screen.width <= 700) {
   let photo  = document.querySelector("#minha-imagem")
   let navbar = document.querySelector("nav")
   photo.remove()
   navbar.remove()
}
