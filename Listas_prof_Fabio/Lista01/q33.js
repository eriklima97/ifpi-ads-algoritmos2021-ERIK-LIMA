const prompt=require('prompt-sync')()

// Inicio
console.log(' digite um número de 3 digitos e veja a soma desse número pelo seu inverso')
const n1 = (prompt(' digite o número: '))

// Processamento
const inverso = n1.split('').reverse().join('')
const soma = Number (n1 + inverso) 

// Saída
console.log(` a soma entre ${n1} + ${inverso} é: ${soma}`)