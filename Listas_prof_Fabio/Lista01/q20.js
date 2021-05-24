const prompt = require('prompt-sync')()

// Entrada
console.log(' conversor de graus °C para graus °F ')
const c = Number(prompt( ' digite a temperatura em graus Celsius: ' ))

// Processamento
const f =  (9 * c + 160) /5

// Saída 
console.log(` a temperatura em graus Fahrenheit é: ${f}°`)