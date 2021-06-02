const input = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(prompt('Velocidade (m/s)'))
console.log(' digite o valor do raio de uma esfera e veja o volume dela')
const r = Number(input( ' digite o valor do raio: '))

// Processamento
const pi = 3.14
const r3 = Math.pow (r , 3 )
const v =  4 * pi * r3 / 3

// Saída
console.log('A velocidade', velocidade_ms,'ms', 'é igual a', velocidade_km, 'km')// Saída 
console.log(' o volume dessa esfera é:', v.toFixed(2))