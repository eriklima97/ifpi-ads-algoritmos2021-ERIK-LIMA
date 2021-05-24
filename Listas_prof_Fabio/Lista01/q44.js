const prompt=require('prompt-sync')()

// Inicio
const quantidade = Number(prompt(' digite a quantidade de latão em (kg): '))

// Processamento
const quantiCobre = quantidade * 0.7
const quantiZinco = quantidade * 0.3

// Saída 
console.log(' a quantidade de cobre é:',quantiCobre.toFixed(1), 'kg')
console.log(' a quantidade de zinco é:',quantiZinco.toFixed(1), 'kg')