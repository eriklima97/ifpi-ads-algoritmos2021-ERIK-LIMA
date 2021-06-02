const input = require('prompt-sync')()

// Entrada
function principal() {
    console.log('leia duas datas e defina qual a mais recente')
    const dia_1 = Number(input('Informe o dia da primeira data: '))
    const mes_1 = Number(input('Informe o mês da primeira data: '))
    const ano_1 = Number(input('Informe o ano da primeira data: '))
    const dia_2 = Number(input('Informe o dia da segunda data: '))
    const mes_2 = Number(input('Informe o mês da segunda data: '))
    const ano_2 = Number(input('Informe o ano da segunda data: '))

// Processamento
    const validar_primeira_data = dia_1 <= 31 && mes_1 <= 12
    const validar_segunda_data = dia_2 <= 31 && mes_2 <= 12
    const validar_datas = validar_primeira_data && validar_segunda_data

// Saida
    if(validar_datas && dia_1 >= dia_2 && mes_1 === mes_2 && ano_1 === ano_2 ){
        console.log(`${dia_1}/${mes_1}/${ano_1} é mais recente.`)

    }else if(validar_datas && mes_1 > mes_2 && ano_1 === ano_2){
        console.log(`${dia_1}/${mes_1}/${ano_1} é mais recente.`)

    }else if(validar_datas && ano_1 > ano_2){
        console.log(`${dia_1}/${mes_1}/${ano_1} é mais recente.`)

    }else if(validar_datas && dia_2 >= dia_1 && mes_2 === mes_1 && ano_1 === ano_2){
        console.log(`${dia_2}/${mes_2}/${ano_2} é mais recente.`)

    }else if(validar_datas && mes_2 > mes_1 && ano_2 === ano_1){
        console.log(`${dia_2}/${mes_2}/${ano_2} é mais recente.`)

    }else if(validar_datas && ano_2 > ano_1){
        console.log(`${dia_2}/${mes_2}/${ano_2} é mais recente.`)

    }else{
        console.log('Uma das datas está inválida')
    }
}

principal()