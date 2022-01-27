document.addEventListener('DOMContentLoaded', () => {

    // Lista de contato
    let lista_contatos = document.getElementById('lista-contatos');

    // Vetor com as seções de contatos
    let secao_contatos = document.querySelectorAll('.secao-lista');



    /* EXIBINDO OU NÃO CABEÇALHOS */
    let secoes = document.getElementsByClassName('secao-lista');

    let n_secoes = secoes.length;

    for (let i = 0; i < n_secoes; i++) {

        let lista = secoes[i].getElementsByTagName('ul');

        let n_contatos = lista[0].children.length;

        // Possui contatos
        if (n_contatos == 0)
        {
            secoes[i].style.display = 'none';
        }
        
    }


    // Input de pesquisar um contato
    let inputFiltro = document.getElementById('inputFiltro');

    // Quando o input receber dados
    inputFiltro.addEventListener('keyup', filtrar_nomes);

    // Função chamada quando o usuário digita no input de pesquisa
    function filtrar_nomes() {

        // Seleciona o valor do input filtro
        let valor_filtro = document.getElementById('inputFiltro').value.toUpperCase();
        
        // Log o valor
        console.log(valor_filtro.toLowerCase()[0]);


        /* EXIBINDO OU NÃO NOMES DOS CONTATOS */

        // Seleciona lista de contatos
        let lista_contatos = document.getElementById('lista-contatos');

        // Seleciona os contatos
        let contatos = lista_contatos.querySelectorAll('li.item-lista');

        // Percorra o vetor de contatos
        for (let i = 0, n_contatos = contatos.length; i < n_contatos; i++) {

            // Selecione o nome do contato (tag 'a')
            let a = contatos[i].getElementsByTagName('a')[0];

            // Se combinar
            if(a.innerHTML.toUpperCase().indexOf(valor_filtro) > -1)
            {
                // Exiba o contato
                contatos[i].style.display = '';
            }
            else
            {
                // Não exiba o contato
                contatos[i].style.display = 'none';
            }
        }


        /* EXIBINDO OU NÃO CABEÇALHOS */

        let secoes = document.getElementsByClassName('secao-lista');

        let n_secoes = secoes.length;

        // Para cada uma das seções
        for (let i = 0; i < n_secoes; i++) {

            // Se o input filtro possuir conteúdo
            if (valor_filtro.toLowerCase()[0])
            {
                // Se a primeira letra do conteúdo do input não for igual a letra da seção
                if (valor_filtro.toLowerCase()[0] != secoes[i].dataset.letra)
                {
                    // Não exiba a seção
                    secoes[i].style.display = 'none';
                }
                else
                {
                    // Exiba a seção
                    secoes[i].style.display = 'block';
                }
            }
            // Se o input não possuir conteúdo
            else
            {
                // Se a seção não possuir contatos
                if (secoes[i].getElementsByTagName('ul')[0].children.length == 0)
                {
                    // Não exiba a seção
                    secoes[i].style.display = 'none';
                }
                else
                {
                    // Exiba a seção
                    secoes[i].style.display = 'block';
                }
            }
        }
    }



    // Formulário de adicionar contato
    let formularioAdicionar = document.getElementById('formulario-adicionar-contato');

    // Quando o formulário for enviado
    formularioAdicionar.addEventListener('submit', adicionar_contato);

    // Função retorno
    function adicionar_contato(event) {

        // Impede o formulário de ser enviado para o servidor
        event.preventDefault();

        // Seleciona o input do nome do contato
        let input = this.getElementsByTagName('input')[0];

        // Seleciona as seções
        let secoes = document.getElementsByClassName('secao-lista');

        // Determina o número de seções
        let n_secoes = secoes.length;

        // Para cada seção
        for (let i = 0; i < n_secoes; i++) {


            if (input.value.toLowerCase()[0] == secoes[i].dataset.letra)
            {

                let lista = secoes[i].getElementsByTagName('ul')[0];

                let contato = document.createElement('li');

                let link = document.createElement('a');

                contato.classList.add('item-lista');

                link.innerText = input.value;

                link.href = '';

                contato.append(link);

                lista.append(contato);

                secoes[i].style.display = 'block';
            }
        }

        input.value = '';

        // Log do valor do input
        console.log(input.value[0]);
    }   


    let botoes_apagar = document.getElementsByClassName('botao-apagar-contato');

    n_botoes = botoes_apagar.length;

    for (let i = 0; i < n_botoes; i++) {

        botoes_apagar[i].addEventListener('click', (evento) => {

            evento.preventDefault();
    
            evento.target.parentElement.parentElement.remove();
        });
    }
});