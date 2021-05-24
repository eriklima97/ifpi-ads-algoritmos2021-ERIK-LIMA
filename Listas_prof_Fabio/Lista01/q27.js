const prompt = require('prompt-sync')()

// Entrada
console.log(' digite um número de segundos e veja o resultado em horas, minutos e segundos')
const t = Number(prompt( ' digite o número de segundos: '))

// Processamento
const hr =  t / 3600
const min = (t / 60) % 60
const s = t % 60

// Saída 
console.log(` corresponde a: ${hr} horas, ${min} minutos e ${s.toFixed} segundos`)