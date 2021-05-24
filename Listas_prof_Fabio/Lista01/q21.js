const prompt=require('prompt-sync')()

// Entrada
console.log(' conversor de °F para °C')
const f = Number (prompt(' digite a temperatura em graus Fahrenheit: '))

// Processamento
const c = (5 * f - 160) /9

// Saída 
console.log(` a temperatura em graus Celsius é: ${c}`)