const temporizador = document.querySelector('.temporizador');


const dataLancamento = new Date('Jan 1, 2023 13:00:00').getTime();


const intervalo = setInterval(() => {
    
    // Seleciona a data e hora de home (milisegundos)
    const agora = new Date().getTime();

    // Diferença de agora até a data de lançamento
    const diferenca = dataLancamento - agora;

    // Cálculos de tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((diferenca % (1000 * 60)) / (1000))

    // Exibe o resultado
    temporizador.innerHTML = `
        <div>${dias}<span>Dias</span></div>
        <div>${horas}<span>Horas</span></div>     
        <div>${minutos}<span>Minutos</span></div> 
        <div>${segundos}<span>Segundos</span></div> 
    `;

    // Se a data de lançamento já passou
    if (diferenca < 0) {
        // Interrompe o temporizador
        clearInterval(invervalo);

        temporizador.getElementsByClassName.color = '#17a2b8';

        temporizador.innerHTML = 'Lançado!';
    }

}, 1000)



console.log(dataLancamento);

















