const input = require('prompt-sync')();

function principal() {
  console.log('Escreva os lados de um triangulo e defina-o\n');

  // Read the user's input
  let a = Number(input('Informe o 1° lado: ')),
    b = Number(input('Informe o 2° lado: ')),
    c = Number(input('Informe o 3° lado: '));

  // Get the result
  let result = tipoDeTriangulo(a, b, c);

  if (result) {
    // Saída: se a entrada do usuário formar um triângulo
    console.log(`\nForma um triângulo ${result}!`)
  } else {
    // Saída: se a entrada do usuário não formar um triângulo
    console.log('\nNão forma um triângulo!');
  }
}

principal();

// Verifique se os valores formam um triângulo
function eTriangulo(a, b, c) {
  let semZero  = (a !== 0) && (b !== 0) && (c !== 0),
  atenderACondição = (a + b > c) && (a + c > b) && (b + c > a);

  return (semZero && atenderACondição) ? true : false;
}

// Verifique o tipo de triângulo (por comprimentos de lados)
function tipoDeTriangulo(a, b, c) {
  if (eTriangulo(a, b, c)) {
    if (a === b && b === c) {
      return 'equilátero';
    } else if (a === b || a === c || b === c) {
      return 'isósceles';
    } else {
      return 'escaleno';
    }
  } else {
    return false;
  }
}