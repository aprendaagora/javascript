// Elementos DOM

const elementoResultado = document.getElementById('resultado');

const elementoComprimento = document.getElementById('comprimento');

const elementoMinuscula = document.getElementById('minusculas');

const elementoMaiuscula = document.getElementById('maiusculas');

const elementoNumero = document.getElementById('numeros');

const elementoSimbolo = document.getElementById('simbolos');

const elementoClipboard = document.getElementById('clipboard');

const botaoGerar = document.getElementById('gerar');



const funcaoAleatoria = {
    minuscula: gerarMinusculaAleatoria,
    maiuscula: gerarMaiusculaAleatoria,
    numero: gerarNumeroAleatorio,
    simbolo: gerarSimboloAleatorio
}




// Copia a senha
elementoClipboard.addEventListener('click', () => {
    
    const textarea = document.createElement('textarea');

    const senha = elementoResultado.innerText;

    if(!senha) {
        return;
    }

    textarea.value = senha;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand('copy');

    alert("Senha copiada! :)");
})




function gerarSenhaAleatoria(
    minuscula,
    maiuscula,
    numero,
    simbolo,
    comprimento_senha) {

        // 1. Inicializa variável senha
        // 2. Filtra configurações não ativas
        // 3. Repete um número de vezes igual ao comprimento da senha e chama uma função geradora para cada configuração
        // 4. Adiciona o caractere à senha
        // 5. Retorna a senha


        let senha_gerada = "";

        const configuracoesContador = minuscula+  maiuscula + numero + simbolo;

        console.log('configuracoesContador: ', configuracoesContador);


        // Array.filter filtra o que é falso
        const configuracoesVetor = [{minuscula}, {maiuscula}, {numero}, {simbolo}].filter(
            item => Object.values(item)[0]
        );

        console.log('configuracoesVetor: ', configuracoesVetor);

        if (configuracoesContador === 0) {
            return "";
        }

        for (let i = 0; i < comprimento_senha; i += configuracoesContador) {

            configuracoesVetor.forEach(configuracao => {

                const nomeFuncao = Object.keys(configuracao)[0];

                console.log('nomeFuncao: ', nomeFuncao);

                senha_gerada += funcaoAleatoria[nomeFuncao]();
            });
        }

        // Se retornar apenas senha_gerada sem fatiar, a senha será maior do que o comprimento gerado caso o número de configurações ativas seja maior do que o comprimento
        const senha_final = senha_gerada.slice(0, comprimento_senha);

        return senha_final;
}


botaoGerar.addEventListener('click', () => {
    
    // Inicializa uma string vazia
    let senha_aleatoria = "";

    // Seleciona o comprimento desejado para a senha
    const comprimento_senha = Number(elementoComprimento.value);


    const possuiMinuscula = elementoMinuscula.checked;
    const possuiMaiuscula = elementoMaiuscula.checked;
    const possuiNumero = elementoNumero.checked;
    const possuiSimbolo = elementoSimbolo.checked;
    
    
    elementoResultado.innerText = gerarSenhaAleatoria(
        possuiMinuscula,
        possuiMaiuscula,
        possuiNumero,
        possuiSimbolo,
        comprimento_senha
    );
})




// Funções que geram caracteres

// A função Math.random gera um float aleatório de 0 a 1
// Quando multiplicado por 26, o valor resultante é um float de 0 até 26
// A função Math.floor arredonda um float para baixo. Usamos essa função pois os números que representam os caracteres são números inteiros, e não decimais
function gerarMinusculaAleatoria() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function gerarMaiusculaAleatoria() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function gerarNumeroAleatorio() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function gerarSimboloAleatorio() {
    
    const simbolos = "!@#$%^&*(){}[]=<>/,.'";

    return simbolos[Math.floor(Math.random() * simbolos.length)];
}