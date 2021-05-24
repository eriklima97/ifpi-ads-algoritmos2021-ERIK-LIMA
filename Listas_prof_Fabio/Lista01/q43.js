const prompt=require('prompt-sync')()

// Entrada
const a = Number (prompt(' insira o valor de A: '))
const b = Number(prompt (' insira o valor de B: '))
const c = Number(prompt(' insira o valor de C: '))
const d = Number(prompt(' insira o valor de D: '))
const e = Number(prompt(' insira o valor de E: '))
const f = Number(prompt(' insira o valor de F: '))

// Processamento
const x = ( a * e ) - (b*d) * (c*e) - (b*f) / (a*b)
const y = ( a * e ) - (b*d) * (a*f) - (c*d) / (d*e)
const t = x + y

// Saída 
console.log(` o resultado é: ${x} + ${y} = ${t}`)