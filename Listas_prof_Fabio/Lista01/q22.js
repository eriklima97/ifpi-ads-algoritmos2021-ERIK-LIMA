const input = require('prompt-sync')()

// Entrada 
console.log(' conversor de kilogramas para gramas ')
const kg = Number (input(' digite o peso em (kg): '))

// Processamento
const g = kg * 1000

// Saída 
console.log(` o peso ${kg}kg é igual a : ${g} g`)