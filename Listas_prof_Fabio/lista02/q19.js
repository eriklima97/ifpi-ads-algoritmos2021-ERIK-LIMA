const input = require('prompt-sync')();

function principal() {
  console.log('calcule o imc de alguem\n');

  // Entrada
  let Altura = Number(input('Altura (m): ')),
    Peso = Number(input('Peso (Kg): '));

  // Processamento
  let resultado = imc(Altura, Peso);

  if (resultado < 25) {
    // Saída: se o imc for menor que 25
    console.log('\nPeso normal!')
  } else if (resultado >= 25 && resultado <= 30) {
    // Saída: se o imc estiver entre 25 e 30
    console.log('\nObeso!')
  } else {
    // Saída: se o imc for maior que 30
    console.log('\nObesidade mórbida!')
  }
}

principal();

// Calcule o IMC
function imc(h, w) {
  return w / h ** 2;
}