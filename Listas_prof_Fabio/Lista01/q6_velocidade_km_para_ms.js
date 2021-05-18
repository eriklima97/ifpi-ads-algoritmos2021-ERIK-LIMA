const input = require('prompt-sync')();

// Entrada
const velocidade_km = Number(input('Digite a velocidade (km/h): '));

// Processamento   
velocidade_ms = velocidade_km / 3.6;

// Saída
console.log(`o Resultado é: ${velocidade_ms} m/s`);