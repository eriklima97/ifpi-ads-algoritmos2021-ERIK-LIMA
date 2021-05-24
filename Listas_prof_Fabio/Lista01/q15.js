const input = require('prompt-sync')()

// Entrada
console.log(' digite o valor da base e da altura de um triângulo e veja o valor da área')
const base = Number(input(' digite o valor da altura aqui: '))
const altura = Number(input(' digite o valor da base aqui: '))

// Processamento
const area = ( base * altura) /2

// Saída 
console.log(` a área desse triângulo é: ${area}`)