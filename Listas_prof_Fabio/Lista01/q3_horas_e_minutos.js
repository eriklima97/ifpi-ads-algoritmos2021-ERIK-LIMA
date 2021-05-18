const prompt = require('prompt-sync')()

// Entrada
const minuto = Number(prompt('Digite aqui o número de minutos: '))

// Processamento
const horas = minuto / 60
const minuto_total = minuto % 60

// Saída
console.log('O valor correspondente em horas é: ', horas, 'horas e', minuto_total, 'minutos')