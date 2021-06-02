const input = require('prompt-sync')();

function principal() {
  console.log('Comparação entre digitos significativos\n');

  // Read the user's input
  let n = Number(input('Informe um número (2 dígitos): '));

  // Get the result
  let result = digitosSignificantes(n);

  if (result) {
    // Output: se os algarismos significativos forem iguais
    console.log('\nAlgarismos iguais!');
  } else {
    // Output: se os algarismos significativos não forem iguais
    console.log('\nAlgarismos diferentes!');
  }
}

principal();
Check
// a igualdade entre algarismos significativos
function digitosSignificantes(number) {
  let ten = Math.trunc(number / 10),
    unit = number % 10;

  return (ten === unit) ? true : false;
}