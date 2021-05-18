const prompt = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(prompt('Velocidade (m/s)'))

// Processamento
const velocidade_km = velocidade_ms * 3.6

// Saída
console.log('A velocidade', velocidade_ms,'ms', 'é igual a', velocidade_km, 'km')