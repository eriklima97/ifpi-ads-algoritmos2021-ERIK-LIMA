const input = require('prompt-sync')();

function principal() {
  console.log('leia a medida de um angulo e calcule o quuadrante\n');

  // Entrada
  let angulo = Number(input('Medida do ângulo (entre 0° e 360°): '));

  // Verifique o quadrante de um ângulo
  if (angulo >= 0 && angulo <= 90) {
    console.log('\nEstá no 1° quadrante!');
  } else if (angulo >= 90 && angulo <= 180) {
    console.log('\nEstá no 2° quadrante!');
  } else if (angulo >= 180 && angulo <= 270) {
    console.log('\nEstá no 3° quadrante!');
  } else if (angulo >= 270 && angulo <= 360) {
    console.log('\nEstá no 4° quadrante!');
  } else {
    // Saída alternativa: se o ângulo não estiver entre 0 e 360
    console.log('\nÂngulo inválido!')
  }
}

principal();