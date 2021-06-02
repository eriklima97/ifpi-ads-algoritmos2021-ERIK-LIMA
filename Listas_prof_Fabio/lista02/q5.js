const input = require('prompt-sync')();

function principal() {
  console.log('Ler 3 numeros e escrever em ordem crescente\n');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: '));

  // Processamento
  let result = sortNumbers(n1, n2, n3);

  // Saída
  console.log(`\nResultado: ${result}`);
}

principal();

// Classifique três números (apenas para três números)
function sortNumbers(a, b, c) {
  if (a < b) {
    if (b < c) {
      return `(${a}, ${b}, ${c})`;
    } else {
      if (a < c) {
        return `(${a}, ${c}, ${b})`;
      } else {
        return `(${c}, ${a}, ${b})`;
      }
    }
  } else {
    if (b < c) {
      if (a < c) {
        return `(${b}, ${a}, ${c})`;
      } else {
        return `(${b}, ${c}, ${a})`;
      }
    } else {
      return `(${c}, ${b}, ${a})`;
    }
  }
}