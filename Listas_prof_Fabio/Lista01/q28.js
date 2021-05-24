const prompt=require('prompt-sync')()

// Entrada
console.log(' escreva um numero inteiro de horas e veja o equivalente em semanas, dias e horas')
const t = Number(prompt(' digite o valor em horas: '))

// Processamento
const s = Math.trunc(t / (7 * 24)) 
const dias = Math.trunc(t / 24) % 7
const hr = t % 24

// Saída
console.log(` equivalem a: ${s} semana(s), ${dias} dia(s) e ${hr} hora(s) `)