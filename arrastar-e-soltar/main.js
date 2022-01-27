const preenchido = document.querySelector('.preenchido');

const vazios = document.querySelectorAll('.vazio');

// Detector de Preenchimento
preenchido.addEventListener('dragstart', iniciarArraste);
preenchido.addEventListener('dragend', terminarArraste);

// Percorre lista de vazios e chama eventos de arraste
for (const vazio of vazios) {
    vazio.addEventListener('dragover', manterEmCima);
    vazio.addEventListener('dragenter', encostar);
    vazio.addEventListener('dragleave', desencostar);
    vazio.addEventListener('drop', soltar);
}




// Funções de Arraste
function iniciarArraste() {

    console.log('inicio');

    this.className += ' hold';

    setTimeout(() => (this.className = 'invisivel'), 0);
}


function manterEmCima(evento)
{
    evento.preventDefault();
    console.log("Mantendo em cima");
}

function encostar(evento) 
{  
    evento.preventDefault();
    this.className += ' hovered';
    console.log("Encostou");
}

function desencostar()
{
    this.className = 'vazio';
    console.log("Separou");
}

function soltar()
{
    this.className = 'vazio';
    this.append(preenchido);
    console.log("Soltou");
}



function terminarArraste() {
    this.className = 'preenchido';
}
































