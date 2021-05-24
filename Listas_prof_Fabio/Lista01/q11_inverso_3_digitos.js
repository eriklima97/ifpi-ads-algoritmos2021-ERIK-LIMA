const prompt = require('prompt-sync')();

// Entrada
const number = Number(prompt('Digite o número: '));

// Processamento
const hundred = Math.trunc(number / 100);
const ten = Math.trunc((number % 100) /10);
const one = Math.trunc(number % 10);

// Saída
console.log(`${number} de forma invertida fica ${one}${ten}${hundred}.`);