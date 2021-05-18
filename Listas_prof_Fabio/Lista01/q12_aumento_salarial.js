const input = require('prompt-sync')()

// Entrada
const salario = Number(input('salário (R$)'))

// Processamento
const novo_salario = salario * 25/100
const novo_salario = salario + novo_salario

// Saída
console.log('O seu novo salário é R$', novo_salario)