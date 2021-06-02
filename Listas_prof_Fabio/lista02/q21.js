const input = require('prompt-sync')()
//entrada
function principal() {
    console.log('realize arredondamentos com a regra usual da matematica')
    const numero = Number(input('Digite um número: '))

// Processamento
    if(parte_fracionaria(numero) >= 0.5){
    const numero_arredondado = parseInt(numero) + 1
    console.log(`O número foi arredondado para ${numero_arredondado}`) 

    }else{
    const numero_arredondado = parseInt(numero)
    console.log(`O número foi arredondado para ${numero_arredondado}`)
    }
}
// Saida
function parte_fracionaria(numero) {
    return numero % parseInt(numero)
}
principal()