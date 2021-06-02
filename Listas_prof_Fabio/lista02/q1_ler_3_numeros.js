// Include the prompt-sync module
const input = require('prompt-sync')();

function ler() {
  console.log('Escreva 3 numeros e veja quantos são iguais');

  // Entrada
  var n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: '));

  // Processamento
  var result = areEqual(n1, n2, n3);

  // Saída
  console.log(result);
}

ler();

// checar quantos numeros sao iguais
function areEqual(a, b, c) {
  if (a === b && a === c) {
    return 'Os três números são iguais!';
  } else if (a === b || a === c || b === c) {
    return 'Há 2 números iguais!';
  } else {
    return 'Todos os números são diferentes!';
  }
}