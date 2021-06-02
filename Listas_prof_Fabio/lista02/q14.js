const input = require('prompt-sync')();

function principal() {
  console.log('verifique os numeros, tire suas medias, e verifique quais sao maiores que a media\n');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: ')),
    n4 = Number(input('Informe o 4° número: ')),
    n5 = Number(input('Informe o 5° número: '));

  // Processamento
  let resultado = maiorQueAMedia(n1, n2, n3, n4, n5);

  // Saida
  console.log(`\nMaior que a média:${result}`);
}

main();

// Verifique números maiores do que a média
function maiorQueAMedia(a, b, c, d, e) {
  let media = (a + b + c + d + e) / 5,
  numeros = '';

  if (a > media) números += ` ${a}`;
  if (b > media) números += ` ${b}`;
  if (c > media) números += ` ${c}`;
  if (d > media) números += ` ${d}`;
  if (e > media) números += ` ${e}`;

  return numeros;
}