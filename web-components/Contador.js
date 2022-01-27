class Contador extends HTMLElement {
    constructor() {
        
        super();

        this.shadow = this.attachShadow({ mode: 'open'});

        this.contagem = 0;
    }

    get contagem() {
        return this.getAttribute('contagem');
    }

    set contagem(valor) {
        this.setAttribute('contagem', valor);
    }


    // (!!!!!!!!)
    // As funções observedAttributes e attributeChangeCallback são necessárias para que o código detecte alterações nos atributos 
    static get observedAttributes() {
        return ['contagem'];
    }

    attributeChangedCallback(prop, oldVal, newVal) {

        if (prop === 'contagem') {

            this.render();

            let botaoInc = this.shadow.querySelector('#btn-incrementar');

            botaoInc.addEventListener('click', this.incrementar.bind(this));

            let botaoDec = this.shadow.querySelector('#btn-decrementar');

            botaoDec.addEventListener('click', this.decrementar.bind(this));
        }
    }

    incrementar() {
        this.contagem++;
    }

    decrementar() {
        this.contagem--;
    }

    // Quando o elemento for anexado ao DOM
    connectedCallback() {
        this.render();

        let botaoInc = this.shadow.querySelector('#btn-incrementar');

        botaoInc.addEventListener('click', this.incrementar.bind(this));

        let botaoDec = this.shadow.querySelector('#btn-decrementar');

        botaoDec.addEventListener('click', this.decrementar.bind(this));
    }

    render() {
        this.shadow.innerHTML = `
            <div>
                <span>${this.contagem}</span>
                <button id='btn-incrementar'>Incrementar</button>
                <button id='btn-decrementar'>Decrementar</button>
            </div>
        `;
    }
}

customElements.define('my-contador', Contador);