const prompt = require('prompt-sync')()

// Entrada 
console.log(' conversor de gramas para KG')
const g = Number (prompt(' Digite o valor em G:'))

// Processamento
const kg = g / 1000

// Saída 
console.log(` o peso ${g} g é igual a: ${kg} kg`)