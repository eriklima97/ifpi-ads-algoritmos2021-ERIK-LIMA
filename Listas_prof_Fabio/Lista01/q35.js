const prompt=require('prompt-sync')()

// Inicio
console.log(' digite um número de 4 digitos e veja a soma de seus elementos')
const n1 = Number (prompt(' digite o número: '))

// Processamento
const mil = n1 / 1000
const resto1 = n1 % 1000
const cen = resto1 / 100
const resto2 = resto1 % 100
const dez = resto2 / 10
const uni = resto2 % 10 
const soma = mil + cen + dez + uni 

// Saída
console.log(` ${mil} + ${cen} + ${dez} + ${uni} `)
console.log(' a soma é:', soma)