const input = require('prompt-sync')();

function principal() {
  console.log('varifique o salario maior entre os professores\n');

  // Entrada
  console.log('[1° professor]');
  let horas1 = Number(input('Horas trabalhadas: ')),
    valorPorHora1 = Number(input('Valor por hora: '));

  console.log('\n[2° professor]');
  let horas2 = Number(input('Horas trabalhadas: ')),
    valorPorHora2 = Number(input('Valor por hora: '));

  // Processamento
  let resultado = maiorSalario(horas1, valorPorHora1, horas2, valorPorHora2);

  // Saida
  console.log(`\nMaior salário: ${resultado}`)
}

principal();

// Calculando o maior salario
function maiorSalario(h1, vh1, h2, vh2) {
  return ((h1 * vh1) > (h2 * vh2)) ? '1° professor' : '2° professor'; 
}