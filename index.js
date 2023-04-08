let visor = document.querySelector('.visor-text');
let escreve = document.querySelector('.igual');


function insere(valor){
        visor.innerHTML = visor.innerHTML += valor;
}

function clearAll(){
    visor.innerHTML = '';
}

function backspace(){
    if(visor.textContent){
        let tela = document.getElementById('visor').innerHTML;

        visor.innerHTML = tela.substring(0, tela.length -1);
    }
}    

function resultado(){
    if(visor.textContent != 'Erro'){
        document.getElementById('visor').innerHTML = eval(visor.innerHTML);
    }
}