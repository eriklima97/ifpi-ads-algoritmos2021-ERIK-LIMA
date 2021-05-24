const prompt = require('prompt-sync')()

// Entrada
console.log(' digite o valor do raio e veja o comprimento dessa circunfêrencia')
const raio = Number (prompt(' digite o valor do raio: '))

// Processamento
const pi = 3.14;
const comprimento = (2 * pi * raio )

// Saída 
console.log(' o comprimento dessa circunfêrencia é:', comprimento )