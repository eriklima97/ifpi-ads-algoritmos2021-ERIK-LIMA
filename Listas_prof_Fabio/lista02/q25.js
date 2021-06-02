const input = require('prompt-sync')()

// entrada
function principal() {
    const usuario_senha = Number(input('Digite a senha: '))
    
// Processamento
    if(verificar_senha(usuario_senha)){
        console.log('Permissão concedida.')
    }else{
        console.log('Acesso negado.')
    }
}
// saida
function verificar_senha(senha) {
    return senha === 5522
}

principal()