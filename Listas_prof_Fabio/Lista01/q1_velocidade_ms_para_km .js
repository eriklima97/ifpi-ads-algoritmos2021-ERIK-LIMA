const prompt = require('prompt-sync')()

//inicio
console.log(' Conversor de m/s para km/h')
const velocidadeMS = Number (prompt(' Digite aqui a velocidade em (m/s): '))

// processo
const velocidadeKM = velocidadeMS * 3.6

//saída 
console.log(` A velocidade ${velocidadeMS} m/s é igual a: ${velocidadeKM.toFixed(0)} km/h `)
