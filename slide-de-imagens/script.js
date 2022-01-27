let imagens = document.querySelectorAll('.slide');
let setaEsquerda = document.querySelector('#seta-esquerda');
let setaDireita = document.querySelector('#seta-direita');
let indice_imagem_atual = 0;


function reiniciar() {
    // Para cada uma das imagens
    for(let i = 0; i < imagens.length; i++) {
        // Não exiba a imagem
        imagens[i].style.display = 'none';
    }
}


function iniciarSlide() {

    reiniciar();

    // Exibe a primeira imagem (índice 0)
    imagens[0].style.display = 'block';
}


function deslizarEsquerda() {

    // Esconde todas as imagens
    reiniciar();

    // Exibe a imagem anterior ao índice atual
    imagens[indice_imagem_atual - 1].style.display = 'block';

    // Atualiza o índice da imagem sendo exibida
    indice_imagem_atual--;
}


function deslizarDireita() {

    // Esconde todas as imagens
    reiniciar();

    // Exibe a imagem anterior ao índice atual
    imagens[indice_imagem_atual + 1].style.display = 'block';

    // Atualiza o índice da imagem sendo exibida
    indice_imagem_atual++;
}



// Quando a seta esquerda for clicada
setaEsquerda.addEventListener('click', function() {

    if (indice_imagem_atual === 0) {

        // Define o índice como sendo o valor do comprimento do vetor
        // Apesar do último elemento do vetor estar localizado em 'length-1'
        // A função deslizar vai ajustar o índice decrementando em 1
        indice_imagem_atual = imagens.length;
    }

    deslizarEsquerda();
});


// Quando a seta direita for clicada
setaDireita.addEventListener('click', function() {

    if (indice_imagem_atual === imagens.length - 1) {

        // Define o índice como sendo -1
        // Apesar do primeiro elemento do vetor estar localizado no índice 0
        // A função deslizar vai ajustar o índice incrementando em 1
        indice_imagem_atual = - 1;
    }

    deslizarDireita();
});



iniciarSlide();