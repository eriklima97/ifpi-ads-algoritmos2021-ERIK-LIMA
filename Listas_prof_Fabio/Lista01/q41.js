const prompt = require('prompt-sync')()

// Inicio
const preçoInicial = Number (prompt(' escreva o custo de fábrica do automovel: '))

// Processamento
const PreçoFinal = preçoInicial + (preçoInicial * 0.28) + (preçoInicial * 0.45)

// Saída
console.log(' preço final:', PreçoFinal.toFixed(2))