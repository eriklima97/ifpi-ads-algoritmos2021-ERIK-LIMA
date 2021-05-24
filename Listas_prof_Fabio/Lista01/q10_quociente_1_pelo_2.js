const prompt = require('prompt-sync')();

// Entrada
const number_1 = prompt('Digite o primeiro número: ');
const number_2 = prompt('Digite o segundo número: ');

// Processamento
function calc(number_1, number_2) {
    return [Math.trunc(number_1 / number_2), number_1 % number_2];
}

// Saída
console.log(`O quociente da divisão é ${calc(number_1, number_2)[0]} e o resto da divisão é ${calc(number_1, number_2)[1]}.`);