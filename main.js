// Constantes
const currentDate = new Date()
const currentYear = currentDate.getFullYear()

// Idade
var idadeBox    = document.querySelector("#idade")
const birthDate = "2005"

idadeBox.innerHTML = `<b>Idade:</b> ${currentYear - birthDate} Anos`
