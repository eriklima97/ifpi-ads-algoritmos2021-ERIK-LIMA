const input = require('prompt-sync')();

function principal() {
  console.log('tratando com variaveis\n');

  // Entrada
  let n1 = Number(input('Informe o 1° valor: ')),
    n2 = Number(input('Informe o 2° valor: '));

  let restante = n1 % n2;

  switch (restante) {
    case 1:
      resultado = (n1 + n2) + restante;
      // Saida: se o restante for 1 
      console.log(`\nResultado: ${resultado}`);
      break;
    case 2:
      let resultadoN1 = (n1 % 2 === 0) ? 'Par' : 'Ímpar',
        resultadoN2 = (n2 % 2 === 0) ? 'Par' : 'Ímpar';
      // Saida: se o restante for 2
      console.log(`\nValor 1: ${resultadoN1}`);
      console.log(`Valor 2: ${resultadoN2}`);
      break;
    case 3:
      result = (n1 + n2) * n1;
      // Saida: se o restante for 3
      console.log(`\nResultado: ${resultado}`);
      break;
    case 4:
      result = (n1 + n2) / n2;
      // Saida: se o restante for 4
      console.log(`\nResultado: ${resultado}`);
      break;
    default:
      let powN1 = n1 ** 2,
        powN2 = n2 ** 2;

      //Saída: se o resto não for nenhum dos outros números
      console.log(`\nQuadrado do 1° valor: ${powN1}`);
      console.log(`Quadrado do 2° valor: ${powN2}`)
  }
}

principal();