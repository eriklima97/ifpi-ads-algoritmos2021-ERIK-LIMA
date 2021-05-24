const input=require('prompt-sync')()

// Entrada
console.log(' digite um número inteiro de dias e veja quantas semanas e quantos dias ele corresponde')
const dias = Number(input(' digite o número de dias: '))

// Processamento
const semana = dias / 7
const diasS = dias % 7 

// Saída 
console.log(` corresponde a: ${semana} semana(s) e  ${diasS} dia(s) `)