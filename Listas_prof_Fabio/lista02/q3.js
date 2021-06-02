const input = require('prompt-sync')();

function principal() {
  console.log('maior entre 3 numeros\n');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  // Processamento
  let resultado = maior(n1, n2);

  // Output
  console.log(`\nMaior: ${result}`);
}

principal();

// Verifique o maior entre os números lidos
function maior(a, b) {
  return (a > b) ? a : b;
}