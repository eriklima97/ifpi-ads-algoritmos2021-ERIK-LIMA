const prompt = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(prompt('Velocidade (m/s)'))
console.log(' digite o valor do raio de uma esfera e veja o volume dela')
const r = Number(input( ' digite o valor do raio: '))

// Processamento
const velocidade_km = velocidade_ms * 3.6

// Saída
console.log('A velocidade', velocidade_ms,'ms', 'é igual a', velocidade_km, 'km')// Saída 