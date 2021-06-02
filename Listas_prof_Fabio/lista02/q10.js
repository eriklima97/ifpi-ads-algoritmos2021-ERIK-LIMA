const input = require('prompt-sync')();

function principal() {
  console.log('veja se a data é valida ou nao\n');

  // Entrada
  let day = Number(input('Informe o dia: ')),
    month = Number(input('Informe o mês: ')),
    year = Number(input('Informe o ano: '));

  // Processamento
  let result = isValid(day, month, year);

  if (result) {
    // Saida: se a data for valida
    console.log('\nÉ uma data válida!')
  } else {
    // Saída: se a data nao for valida
    console.log('\nNão é uma data válida!')
  }
}

principal();

// Verifique se a data é válida
function isValid(d, m, y) {
  let dayIsOk = (d >= 1 && d <= 31),
    monthIsOk = (m >= 1 && m <= 12),
    yearIsOk = (y >= 1);

  return (dayIsOk && monthIsOk && yearIsOk) ? true : false;
}