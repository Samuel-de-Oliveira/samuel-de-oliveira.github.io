// Constantes
const currentDate = new Date()
const currentYear = currentDate.getFullYear()

// Idade
var idadeBox    = document.querySelector("#idade")
const birthDate = 2005

idadeBox.innerHTML = `<b>Idade:</b> ${currentYear - birthDate} Anos`

if (window.screen.width <= 700) {
   var photo  = document.querySelector("#minha-imagem")
   var navbar = document.querySelector("nav")
   photo.remove()
   navbar.remove()
}
