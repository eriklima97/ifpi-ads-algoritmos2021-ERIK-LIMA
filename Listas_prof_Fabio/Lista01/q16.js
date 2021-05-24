const prompt = require('prompt-sync')()

// Entrada
console.log(' digite o valor do lado de um quadrado. ')
const lado = Number (prompt(' digite o valor do lado: '))

// Processamento
const area = (lado * lado) 

// Saída
console.log(' a área desse quadrado é:', area)