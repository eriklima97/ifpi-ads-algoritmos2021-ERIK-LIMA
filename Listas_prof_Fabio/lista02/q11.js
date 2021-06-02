const input = require('prompt-sync')();

function principal() {
  console.log('### Opções ###\n');

  // processamento
  let num1 = Number(input('Informe o 1° número: ')),
    num2 = Number(input('Informe o 2° número: ')),
    num3 = Number(input('Informe o 3° número: ')),
    option = Number(input('Escolha uma opção (1, 2 ou 3): '));

  switch (option) {
    case 1:
      // Quando o resultado da opção corresponde a 1
      console.log(`\nResultado: ${num1}`);
      break;
    case 2:
      // Quando o resultado da opção corresponde a 2
      console.log(`\nResultado: ${num2}`);
      break;
    case 3:
      // Quando o resultado da opção corresponde a 3
      console.log(`\nResultado: ${num3}`);
      break;
    default:
      // Quando nenhum dos valores corresponde ao valor da opção
      console.log('\nOpção inválida!');
  }
}

principal();