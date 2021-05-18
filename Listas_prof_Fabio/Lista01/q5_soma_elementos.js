const input = require('prompt-sync')();

// Entrada
const number = input('Digite um número de 3 dígitos: ');

// Processamento
const somaDosDigitos = Number(number[0]) + Number(number[1]) + Number(number[2]);

// Saída
console.log(`o Resultado é: ${somaDosDigitos}`);