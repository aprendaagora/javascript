const template_cartao = document.createElement('template');

template_cartao.innerHTML = `
    <style>
        .cartao-usuario {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 15px;
            margin-bottom: 15px;
            border-bottom: grey 5px solid;
        }

        .cartao-usuario img {
            width: 100%;
        }

        .cartao-usuario button {
            cursor: pointer;
            background: grey;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="cartao-usuario">

        <img />
    
        <div>
            <h4></h4>
            <div class="info-usuario">
                <p><slot name="email" /></p>
                <p><slot name="telefone" /></p>
            </div>
            <button id="toggle-info">Esconder</button>
        </div>
        
    </div>
`;

class CartaoUsuario extends HTMLElement {
    
    constructor() {

        super();

        this.exibirInfo = true;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template_cartao.content.cloneNode(true));

        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('nome');

        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
        
        this.exibirInfo = !this.exibirInfo;

        const info =  this.shadowRoot.querySelector('.info-usuario');
        const botao = this.shadowRoot.querySelector('#toggle-info');

        if(this.exibirInfo) {
            info.style.display = 'block';
            botao.innerText = 'Esconder';
        } else {
            info.style.display = 'none';
            botao.innerText = 'Exibir';
        }
    }

    connectedCallback() {
        console.log("Um componente CartaoUsuario foi criado.");

        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => {
            this.toggleInfo();
        })
    }
    
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('cartao-usuario', CartaoUsuario);
