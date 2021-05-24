const prompt=require('prompt-sync')()

// Inicio
console.log(' calculo da expressão D= R + S /2')
console.log(' digite 3 números inteiros e positivos (A,B,C)')
const a = Number(prompt(' digite o valor de A: '))
const b = Number(prompt(' digite o valor de B: '))
const c = Number(prompt(' digite o valor de C: '))

// Processamento
const r = a + (b* b)  
const s = b + (c * c)
const calculo = (r + s) / 2

// Saída
console.log(' o resultado é:', calculo ) 