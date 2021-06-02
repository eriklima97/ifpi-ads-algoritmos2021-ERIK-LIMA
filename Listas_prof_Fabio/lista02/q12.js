const input = require('prompt-sync')();

function principal() {
  console.log('verifique se o numero é par ou impar\n');

  // Entrada
  let number = Number(input('Informe um número: '));

  // Processamento
  let result = ePar(number);

  if (result) {
    // Saida: se o numero for par
    console.log('\nÉ par!');
  } else {
    // Saida: se o numero for impar
    console.log('\nÉ ímpar!')
  }
}

principal();

// Verifique quantos números iguais existem entre três números
function ePar(n) {
  return (n % 2 === 0) ? true : false;
}