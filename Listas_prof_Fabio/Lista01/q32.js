const prompt=require('prompt-sync')()

// Inicio
console.log(' digite um número de 3 digitos e veja a diferença entre esse número e seu inverso')
const n1 = (prompt(' digite o número: '))

// Processamento
const inverso = n1.split('').reverse().join('')
const diferença = n1 - inverso

// Saída 
console.log(` o resultado é: ${n1} - ${inverso} = ${diferença}` )