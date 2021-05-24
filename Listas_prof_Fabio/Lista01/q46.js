const prompt=require('prompt-sync')()

// Entrada
const valorProduto = Number(prompt(' insira o valor do produto: '))

// Processamento
const prestação = Math.trunc((valorProduto /3))
const pagamento = Math.trunc((valorProduto %3) + prestação)

// Saída
console.log(' o valor da entrada é:',pagamento,'R$' )
console.log(' o valor da primeira parcela é:',prestação,'R$' )
console.log(' o valor da segunda parcela é:',prestação,'R$' )