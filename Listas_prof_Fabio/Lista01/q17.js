const input = require('prompt-sync')()

// Entrada
console.log(' digite o valor da base e da altura de um retângulo. ')
const base = Number (input(' digite o valor da base aqui: '))
const altura = Number (input(' digite o valor da altura aqui: '))

// Processamento
const area = (base * altura)

// Saída 
console.log(' o valor da área desse retângulo é:', area )