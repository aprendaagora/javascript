const contadores = document.querySelectorAll('.contador');

const velocidade = 200;

contadores.forEach( (contador) => {

    const atualizarContador = () => {

        // Por padrão, 'data-target' é do tipo 'string', mas se colocarmos um sinal de + como prefixo, ele converte em 'number'
        const contador_selecionado = +contador.getAttribute('data-target');
        
        // A propriedade 'innerText' também é do tipo 'string'
        const valor_contador = +contador.innerText;

        // Valor que será usado para incrementar o valor do contador gradativamente
        const incremento = contador_selecionado / velocidade;


        // Se o valor do contador for menor do que o valor final
        if( valor_contador < contador_selecionado) {

            // Dependendo do valor da variável 'velocidade', 2000 por exemplo, o resultador será decimal, por isso usamos a função ceil da biblioteca Math, para arredondar o valor
            contador.innerText = Math.ceil(valor_contador + incremento);

            // Chama a função novamente pois o valor ainda não atingiu o valor final
            setTimeout(atualizarContador, 3)

        // Se tiver atingido o valor final
        } else {

            valor_contador.innerText = contador_selecionado;
        }

    }

    atualizarContador();
});

