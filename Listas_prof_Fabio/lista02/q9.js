const input = require('prompt-sync')();

function principal() {
  console.log('Calcule os numeros primos até o 100');

  // Saída
  let number = Number(input('Informe um número entre 0 e 100: '));

  if (number >= 0 && number <= 100) {
    if (isPrime(number)) {
      // Saída: se o numero for primo
      console.log('É primo!');
    } else {
      // Saida: se o numero nao for primo
      console.log('Não é primo!');
    }
  } else {
    // Saída: se o numero nao estiver entre 0 e 100
    console.log('Só digite números entre 0 e 100!');
  }
}

principal();

// Verifique se o número é primo (apenas para números menores que 100)
function isPrime(n) {
  let isEqualTo = (n === 2) || (n === 3) || (n === 5) || (n === 7),
    isNotDivisibleBy = (n % 2 !== 0) && (n % 3 !== 0) && (n % 5 !== 0) && (n % 7 !== 0);

  return ((isNotDivisibleBy || isEqualTo) && n !== 1) ? true : false ;
}