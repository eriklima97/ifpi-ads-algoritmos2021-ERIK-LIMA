const input = require('prompt-sync')();

function principal() {
  console.log('verifique o maior e o menor entre os numeros\n');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: ')),
    n3 = Number(input('Informe o 3° número: ')),
    n4 = Number(input('Informe o 4° número: ')),
    n5 = Number(input('Informe o 5° número: '));

  // Processamento
  let maiorResultado = biggest(n1, n2, n3, n4, n5),
    menorResultado = smallest(n1, n2, n3, n4, n5);

  // Saída
  console.log(`\nMaior: ${maiorResultado}`);
  console.log(`Menor: ${menorResultado}`);
}

principal();

// Verifique o maior entre os números lidos
function biggest(a, b, c, d, e) {
  let maior = a;

  if (b > maior) maior = b;
  if (c > maior) maior = c;
  if (d > maior) maior = d;
  if (e > maior) maior = e;

  return maior;
}

// Verifique o menor entre os números lidos
function smallest(a, b, c, d, e) {
  let menor = a;

  if (b < menor) menor = b;
  if (c < menor) menor = c;
  if (d < menor) menor = d;
  if (e < menor) menor = e;

  return menor;
}