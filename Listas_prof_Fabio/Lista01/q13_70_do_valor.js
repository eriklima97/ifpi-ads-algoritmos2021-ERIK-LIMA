const input = require('prompt-sync')()

// Entrada
console.log(' Digite um valor em real(R$) e veja 70% do valor')
const valor_real = Number (input(' digite aqui o valor:  '))

// Processamento
const porcento = valor_real * 0.7

// Saída
console.log(` 70% do valor é: ${porcento}  `)