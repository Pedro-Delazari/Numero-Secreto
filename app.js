let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector ('input').value;
   
    if (chute == numeroSecreto){
        exibirTexto ('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTexto ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
                exibirTexto('p', 'O número secreto é maior');
            }
            // tentativas =  tentativas + 1;
            tentativas++;
            limparCampo();
        }
       
    }

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    // length = tamanho
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados =[];
    }
    // gerar outro número se tiver um igual
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
    // adcionar item ao final da lista = push(param)
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disbled', true);
}