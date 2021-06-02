const input = require('prompt-sync')();

function principal() {
  console.log('leia as notas de um aluno e confira se ele foi aprovado\n');

  // Entrada
  let g1 = Number(input('Primeira nota: ')),
    g2 = Number(input('Segunda nota: '));

  let average = (g1 + g2) / 2;

  if (average >= 7) {
    // Saida: se passou no exame
    console.log('\nAprovado!');
  } else {
    // Processamento 1
    let result = passed(average);

    if (result) {
      // Saída: se aprovado no exame final
      console.log('\nAprovado na prova final!')
    } else {
      // Saída: se reprovado no exame final
      console.log('\nReprovado!')
    }
  }
}

principal();

// Confira o resultado do exame final
function passed(avg) {
  let g3 = Number(input('Nota da prova final: '));

  return ((g3 + avg) / 2) ? true : false;
}