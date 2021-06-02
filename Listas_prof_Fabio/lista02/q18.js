const input = require('prompt-sync')();

function principal() {
  console.log('operações definidas\n');

  // Entrada
  let n1 = Number(input('Informe o 1° número: ')),
    n2 = Number(input('Informe o 2° número: '));

  console.log('Escolha uma opção:');
  console.log('[1] Adição');
  console.log('[2] Subtração');
  console.log('[3] Multiplicação');
  console.log('[4] Divisão');
  
  let operation = Number(input('=> ')),
    resultado;

  // Verifique a operação escolhida e imprima o resultado
  switch (operation) {
    case 1:
      resultado = n1 + n2;
      console.log(`\nResultado: ${resultado}`);
      break;
    case 2:
      resultado = n1 - n2;
      console.log(`\nResultado: ${resultado}`);
      break;
    case 3:
      resultado = n1 * n2;
      console.log(`\nResultado: ${resultado}`);
      break;
    case 4:
      resultado = (n1 / n2).toFixed(2);
      console.log(`\nResultado: ${result}`);
      break;
    default:
      // Saída alternativa: se a operação escolhida for inválida
      console.log('\nOperação inválida!');
  }
}

principal();