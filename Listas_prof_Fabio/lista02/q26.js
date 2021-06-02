const input = require('prompt-sync')()

// Entrada
console.log('Leia os 3 lados de um triângulo e identifique sua hipotenusa e seus catetos.')
function principal() {
    const primeiro_lado = Number(input('Informe o valor do primeiro lado: '))
    const segundo_lado = Number(input('Informe o valor do segundo lado: '))
    const terceiro_lado = Number(input('Informe o valor do terceiro lado: '))

    // Processamento
    const hipotenusa = identificar_hipotenusa(primeiro_lado, segundo_lado, terceiro_lado)
    const cateto_a = identificar_cateto_a(primeiro_lado, segundo_lado, terceiro_lado)
    const cateto_b = identificar_cateto_b(primeiro_lado, segundo_lado, terceiro_lado)

    if(hipotenusa === primeiro_lado){
        console.log(`A hipotenusa vale ${hipotenusa}`)
        console.log(`Os catetos valem ${cateto_a} e ${cateto_b}`)
    }else if(hipotenusa === segundo_lado){
        console.log(`A hipotenusa vale ${hipotenusa}`)
        console.log(`Os catetos valem ${cateto_a} e ${cateto_b}`)

    }else if(hipotenusa === terceiro_lado){
        console.log(`A hipotenusa vale ${hipotenusa}`)
        console.log(`Os catetos valem ${cateto_a} e ${cateto_b}`)
    }
}
// Saida
function identificar_hipotenusa(lado_1, lado_2, lado_3) {
    const comparacao_1 = lado_1 > lado_2 && lado_1 > lado_3
    const comparacao_2 = lado_2 > lado_1 && lado_2 > lado_3
    const comparacao_3 = lado_3 > lado_2 && lado_3 > lado_1

    if(comparacao_1){
        return lado_1

    }else if(comparacao_2){
        return lado_2

    }else if(comparacao_3){
        return lado_3

    }
}
function identificar_cateto_a(lado_1, lado_2, lado_3){
    const comparacao_1 = identificar_hipotenusa(lado_1, lado_2, lado_3) > lado_1
    const comparacao_2 = identificar_hipotenusa(lado_1, lado_2, lado_3) > lado_2
    const comparacao_3 = identificar_hipotenusa(lado_1, lado_2, lado_3) > lado_3

    if(comparacao_1){
        return lado_1

    }else if(comparacao_2){
        return lado_2

    }else if(comparacao_3){
        return lado_3

    }

}
function identificar_cateto_b(lado_1, lado_2, lado_3){
    const comparacao_1 = identificar_cateto_a(lado_1, lado_2, lado_3) > lado_1
    const comparacao_2 = identificar_cateto_a(lado_1, lado_2, lado_3) > lado_2
    const comparacao_3 = identificar_cateto_a(lado_1, lado_2, lado_3) > lado_3

    if(comparacao_1){
        return lado_1

    }else if(comparacao_2){
        return lado_2

    }else if(comparacao_3){
        return lado_3

    }
}
principal()