const input=require('prompt-sync')()

// Entrada
console.log(' digite o número de meses e veja o resultado em anos e meses ')
const t =  Number(input(' digite o número: '))

// Processamento
const anos = t / 12
const meses = t % 12

// Saída
console.log(` resultado: ${anos} ano(s) e ${meses} mese(s) `)