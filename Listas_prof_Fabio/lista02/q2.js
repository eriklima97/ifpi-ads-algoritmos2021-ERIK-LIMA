const input = require('prompt-sync')();

function main() {
  console.log('maior e menos entre 2 numeros');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  // Processamento
  let result = maiorEMenor(n1, n2);

  // Saída
  console.log(result);
}

main();

// checar o maior e o menor
function maiorEMenor(a, b) {
  if (a > b) {
    return `Maior: ${a}\nMenor: ${b}`;
  } else if (a < b) {
    return `Maior: ${b}\nMenor: ${a}`;
  } else {
    return 'Os números são iguais!';
  }
}