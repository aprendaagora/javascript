
/*
const MaquinaEscrever = function(elementoTexto, palavras, intervalo = 3000) {
    this.elementoTexto = elementoTexto;
    this.palavras = palavras;
    this.texto = '';
    this.indicePalavra = 0;
    this.intervalo = parseInt(intervalo, 10);
    this.digitar();
    this.estaApagando = false;
}

// Método digitar
MaquinaEscrever.prototype.digitar = function() {

    // Índice da palavra atual
    const atual = this.indicePalavra % this.palavras.length;
    
    // Seleciona o texto da palavra atual
    const palavra = this.palavras[atual];

    // Checa se está apagando
    if(this.estaApagando) {

        // Remove um caractere
        this.texto = palavra.substring(0, this.texto.length - 1);

    } else {

        // Adiciona um caractere
        this.texto = palavra.substring(0, this.texto.length + 1);
    }

    // Insere texto no elemento
    this.elementoTexto.innerHTML = `<span class="texto texto--cursor-ativado">${this.texto}</span>`


    // Velocidade da digitação
    let velocidadeDigitacao = 300;

    if (this.estaApagando) {
       // velocidadeDigitacao = velocidadeDigitacao / 2 
        velocidadeDigitacao /= 2 
    }

    // Se palavra estiver completa
    if (!this.estaApagando && this.texto === palavra) {

        // Define uma pausa no fim
        velocidadeDigitacao = this.intervalo;


        function desativarCursor() {
            
            let cursor = document.querySelector('.texto');

            cursor.classList.remove('texto--cursor-ativado');

            cursor.classList.add('texto--cursor-desativado');

            setTimeout(ativarCursor, 500);
        }

        function ativarCursor() {

            let cursor = document.querySelector('.texto');
            cursor.classList.remove('texto--cursor-desativado');

            cursor.classList.add('texto--cursor-ativado');

            setTimeout(desativarCursor, 600);
        }

        desativarCursor();

        this.estaApagando = true;
        
    // Se tiver apagado a palavra inteira
    } else if (this.estaApagando && this.texto === '') {
        
        this.estaApagando = false;

        // Passa para a próxima palavra
        this.indicePalavra++;

        // Pausa antes de começar a digitar novamente
        velocidadeDigitacao = 600;
    }

    // Define a recursão
    setTimeout(() => this.digitar(), velocidadeDigitacao);
}
*/



// Classe ES6
class MaquinaEscrever {

    constructor(elementoTexto, palavras, intervalo = 3000) {
        this.elementoTexto = elementoTexto;
        this.palavras = palavras;
        this.texto = '';
        this.indicePalavra = 0;
        this.intervalo = parseInt(intervalo, 10);
        this.digitar();
        this.estaApagando = false;
    }

    digitar() {

        // Índice da palavra atual
        const atual = this.indicePalavra % this.palavras.length;
        
        // Seleciona o texto da palavra atual
        const palavra = this.palavras[atual];

        // Checa se está apagando
        if(this.estaApagando) {

            // Remove um caractere
            this.texto = palavra.substring(0, this.texto.length - 1);

        } else {

            // Adiciona um caractere
            this.texto = palavra.substring(0, this.texto.length + 1);
        }

        // Insere texto no elemento
        this.elementoTexto.innerHTML = `<span class="texto texto--cursor-ativado">${this.texto}</span>`


        // Velocidade da digitação
        let velocidadeDigitacao = 300;

        if (this.estaApagando) {
        // velocidadeDigitacao = velocidadeDigitacao / 2 
            velocidadeDigitacao /= 2 
        }

        // Se palavra estiver completa
        if (!this.estaApagando && this.texto === palavra) {

            // Define uma pausa no fim
            velocidadeDigitacao = this.intervalo;


            function desativarCursor() {
                
                let cursor = document.querySelector('.texto');

                cursor.classList.remove('texto--cursor-ativado');

                cursor.classList.add('texto--cursor-desativado');

                setTimeout(ativarCursor, 500);
            }

            function ativarCursor() {

                let cursor = document.querySelector('.texto');
                cursor.classList.remove('texto--cursor-desativado');

                cursor.classList.add('texto--cursor-ativado');

                setTimeout(desativarCursor, 600);
            }

            desativarCursor();

            this.estaApagando = true;
            
        // Se tiver apagado a palavra inteira
        } else if (this.estaApagando && this.texto === '') {
            
            this.estaApagando = false;

            // Passa para a próxima palavra
            this.indicePalavra++;

            // Pausa antes de começar a digitar novamente
            velocidadeDigitacao = 600;
        }

        // Define a recursão
        setTimeout(() => this.digitar(), velocidadeDigitacao);
    }
}








// Inicia ao carregar o DOM
document.addEventListener('DOMContentLoaded', iniciar);

// Inicia o efeito
function iniciar() {

    const elementoTexto = document.querySelector('.texto-maquina');

    const palavras = JSON.parse(elementoTexto.getAttribute('data-palavras'));
    const intervalo = elementoTexto.getAttribute('data-intervalo');

    new MaquinaEscrever(elementoTexto, palavras, intervalo);
}

