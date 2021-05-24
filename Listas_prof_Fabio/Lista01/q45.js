const prompt=require('prompt-sync')()

// Inicio
const valor = Number(prompt(' insira o valor que deseja sacar: '))

// Processamento
const notas50 = Math.trunc(valor / 50)
const notas10 = Math.trunc((valor % 50) /10)
const notas5 = Math.trunc((valor % 10) /5)
const nota1   = valor % 5

// Saída
console.log(' notas de 50 R$:', notas50 )
console.log(' notas de 10 R$:', notas10 )
console.log(' notas de 5 R$:',  notas5 )
console.log(' notas de 1 R$:',  nota1 )