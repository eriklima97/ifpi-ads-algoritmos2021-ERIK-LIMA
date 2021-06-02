var input = require('prompt-sync')()

// Entrada
function principal() {
    console.log('Leia a hora do início de um jogo e a hora de fim do jogo')
    const inicio_jogo_horas = Number(input('Digite a hora inicial do jogo: '))
    const inicio_jogo_minutos = Number(input('Digite o minuto inicial do jogo: '))
    const final_jogo_horas = Number(input('Digite a hora final do jogo: '))
    const final_jogo_minutos = Number(input('Digite o minuto final do jogo: '))

// Processamento
    const validar_horario_inicial = inicio_jogo_horas < 24 && inicio_jogo_minutos < 60
    const validar_horario_final = final_jogo_horas < 24 && final_jogo_minutos < 60
    const validar_horarios = validar_horario_inicial && validar_horario_final
    
// Saida
    if(validar_horarios && inicio_jogo_horas > final_jogo_horas && inicio_jogo_minutos > final_jogo_minutos ){
        const horas_duracao = (24 - (inicio_jogo_horas - final_jogo_horas)) - 1
        const minutos_duracao = 60 - (inicio_jogo_minutos - final_jogo_minutos)
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas > final_jogo_horas && inicio_jogo_minutos < final_jogo_minutos){
        const horas_duracao = (24 - (inicio_jogo_horas - final_jogo_horas)) - 1
        const minutos_duracao = final_jogo_minutos - inicio_jogo_minutos
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas < final_jogo_horas && inicio_jogo_minutos > final_jogo_minutos){
        const horas_duracao = (final_jogo_horas - inicio_jogo_horas) - 1
        const minutos_duracao = 60 - (inicio_jogo_minutos - final_jogo_minutos)
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas < final_jogo_horas && inicio_jogo_minutos < final_jogo_minutos){
        const horas_duracao = final_jogo_horas - inicio_jogo_horas
        const minutos_duracao = final_jogo_minutos - inicio_jogo_minutos
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 
    }else{
        console.log('Horário inválido')
    }
}   

principal()