const prompt=require('prompt-sync')()

// Inicio
console.log(' dinheiro gasto por um fumante')
const anos = Number(prompt(' anos fumando: '))
const cigarros = Number(prompt(' quantos cigarros por dia: '))
const preço = Number(prompt(' quanto custa a carteira de cigarros: '))

// Processamento
const anos1 = anos * 365 
const total = anos1 * (preço * cigarros) / 20

// Saída
console.log(' o resultado é:', total.toFixed(2)) 