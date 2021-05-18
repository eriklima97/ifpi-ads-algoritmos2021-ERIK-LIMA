const prompt = require('prompt-sync')()

//Entrada
const cotacao_dolar = Number(prompt('digite aqui a cotação atual do dolar'))
const quant_dolar = Number(prompt('A quantidade de dolares a ser convertidos'))

// Processamento
const valor_real = quant_dolar * cotacao_dolar

// Saída
console.log('o valor obtido em R$', valor_real,'reais')
