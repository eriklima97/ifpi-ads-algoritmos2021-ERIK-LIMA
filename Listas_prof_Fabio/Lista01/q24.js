const input = require('prompt-sync')()

// Entrada 
console.log(' conversor de metros para CM')
const m = Number (input(' digite aqui o valor em M: '))

// Processamento
const cm = m * 100

// Saída 
console.log(` o valor é igual a : ${cm} cm `)