const prompt=require('prompt-sync')()

// Entrada 
console.log(' digite o valor em metros e veja em KM e M')
const m = Number (prompt( ' digite o valor em M: '))

// Processamento
const km = m / 1000
const km_m = m % 1000

// Saída 
console.log(` o valor equivale a: ${km} km e ${km_m} m `)