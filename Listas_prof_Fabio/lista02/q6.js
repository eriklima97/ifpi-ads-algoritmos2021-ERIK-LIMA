const input = require('prompt-sync')();

function principal() {
  console.log('Leia os angulos de um triangulo para defini-lo\n');

  // Entrada
  let a = Number(input('Informe o 1° ângulo: ')),
    b = Number(input('Informe o 2° ângulo: ')),
    c = Number(input('Informe o 3° ângulo: '));

  // Processamento
  let result = typeOfTriangle(a, b, c);

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
function isTriangle(a, b, c) {
  let withoutZero = (a !== 0) && (b !== 0) && (c !== 0),
    sumIs180 = (a + b + c) === 180;

  return (sumIs180 && withoutZero) ? true : false;
}

// Verifique o tipo de triângulo (por ângulos internos)
function typeOfTriangle(a, b, c) {
  if (isTriangle(a, b, c)) {
    if (a === 90 || b === 90 || c === 90) {
      return 'retângulo';
    } else if (a > 90 || b > 90 || c > 90) {
      return 'obtusângulo';
    } else {
      return 'acutângulo';
    }
  } else {
    return false;
  }
}