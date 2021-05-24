const input = require('prompt-sync')()

// Inicio
console.log(' digite a idade em dias e veja o resultado em anos, meses e dias')
const idade = Number(input(' digite a idade: '))

// Processamento
const anos = Math.trunc(idade / 365)
const resto1 = idade % 365
const meses = Math.trunc (resto1 / 31)
const resto2 = resto1 % 31
const dias = Math.trunc(resto2 % 31)

// Saída
console.log(` resultado: ${anos} ano(s), ${meses} mese(s) e ${dias} dia(s)  `)