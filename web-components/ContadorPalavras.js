class ContadorPalavras extends HTMLElement {
    constructor() {

        super();
        const elemento_pai = this.parentNode;
        const shadow = this.attachShadow({mode: 'open'});
        const texto = document.createElement('span');
        const contador = `Palavras: ${this.contarPalavras(elemento_pai)}`;

        texto.textContent = contador;

        shadow.appendChild(texto);

        setInterval(() => {
            const contador = `Palavras: ${this.contarPalavras(elemento_pai)}`;

            texto.textContent = contador;
        }, 200);

    }


    contarPalavras(nodo) {
        const texto = nodo.innerText || nodo.innerContent;

        return texto.split(/\s+/g).length;
    }
}


const StreamActions = {
    update(element) {
        const target = document.getElementById(element.target);
        target.innerHTML = "";
        target.append(element.template.content); 
    }
}

class StreamElement extends HTMLElement {
    constructor() {
        super();
        StreamActions[this.acao](this);
        this.remove();
    }

    get acao() {
        return this.getAttribute('acao');
    }

    get target() {
        return this.getAttribute('target');
    }

    get template() {
        return this.firstElementChild;
    }
}

window.customElements.define('turbo-stream', StreamElement);
window.customElements.define('contador-palavras', ContadorPalavras);