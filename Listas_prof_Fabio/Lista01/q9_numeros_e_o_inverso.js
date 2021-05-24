const prompt = require('prompt-sync')()

// Entrada
console.log('Mostrar dois números e seu inverso:')
a = Number(prompt('Digite aqui o primeiro número: '))
b = Number(prompt('Digite aqui o segundo número: '))

// Processamento
inverso = b + "" + a

// Saída
console.log('A ordem inversa dos algarismos digitados é: ', inverso)