const input = require('prompt-sync')();

function principal() {
  console.log('calcular a idade em anos\n');

  // Entrada
  let dia = Number(input('Informe o dia atual: ')),
    mes = Number(input('Informe o mês atual: ')),
    ano = Number(input('Informe o ano atual: ')),
    diaAniversario = Number(input('Dia de nascimento: ')),
    mesAniversario = Number(input('Mês de nascimento: ')),
    anoAniversario = Number(input('Ano de nascimento: '));

  // Processamento
  let resultado = calcularIdade(dia, mes, ano, diaAniversario, mesAniversario, anoAniversario);

  // Saida
  console.log(`\nIdade: ${result}`)
}

principal();

// Calcular idade
function calculateAge(d, m, y, bd, bm, by) {
  let age = y - by;

  return ((m < bm) || (m === bm && d < bd)) ? --age : age;
}