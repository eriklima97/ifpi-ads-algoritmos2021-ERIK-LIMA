const prompt = require('prompt-sync')()

// Entrada
const valor_hora = Number(prompt('Diga aqui um valor de horas: '))
const valor_minuto = Number(prompt('Diga aqui um valor em minutos: '))

// Processamento
val_min_total = (valor_hora * 60) + valor_minuto

// Saida
console.log('A equivalência em minutos será: ', val_min_total)