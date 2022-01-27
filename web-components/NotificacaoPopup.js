const template_notificacao = document.createElement('template');

template_notificacao.innerHTML = `
    <style>

        .container-notificacao {
            display: inline-block;
            position: relative;
        }

        .cancel {
            display: none;
        }

        svg {
            width: 1em;
            cursor: pointer;
        }

        .container-mensagem {
            position: absolute;
            bottom: 125%;
            z-index: 9;
            width: 300px;
            background: white;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
            font-size: .8em;
            border-radius: .5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
    </style>

    <div class="container-notificacao">
        <svg viewBox="0 0 20 20" class="alert">
            <g id="alert" transform="translate(-835 -445)">
                <circle id="Ellipse_1" data-name="Ellipse 1" cx="10" cy="10" r="10" transform="translate(835 445)" fill="blue" />

                <path id="Path_1" data-name="Path 1" d="M0,0H2.912l-1,7.533H1Z" transform="translate(843.544 450)" fill="white" />

                <circle id="Ellipse_2" data-name="Ellipse 2" cx="1" cy="1" r="1" transform="translate(844 459)" fill="white" />
            </g>
        </svg>

        <svg viewBox="0 0 20 20" class="cancel">
            <g id="exit" transform="translate(-835 -417)">
                <circle id="Ellipse_4" data-name="Ellipse 4" cx="10" cy="10" r="10" transform="translate(835 417)" fill="blue" />

                <rect id="Rectangle_1" data-name="Rectangle 1" width="1.65" height="9.902" transform="translate(840 422)" fill="red" />

                <rect id="Rectangle_2" data-name="Rectangle 2" width="1.65" height="9.902" transform="translate(847 422)" fill="red" />
            </g>
        </svg>

        <div class="container-mensagem">
            <slot name="mensagem" />
        </div>
    </div>
`;

class NotificacaoPopup extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' })

        this.shadowRoot.appendChild(template_notificacao.content.cloneNode(true));
    }


    exibir(expandido) {

        const mensagem = this.shadowRoot.querySelector('.container-mensagem');

        const alert = this.shadowRoot.querySelector('.alert');

        const cancelar = this.shadowRoot.querySelector('.cancel');

        if (expandido) {

            mensagem.style.transform = 'scale(1)';
            alert.style.display = 'none';
            cancelar.style.display = 'block';
            expandido = false;

        } else {

            mensagem.style.transform = 'scale(0)';
            cancelar.style.display = 'none';
            alert.style.display = 'block';

        }
    }

    connectedCallback() {

        console.log("Um componente NotificacaoPopup foi criado.");

        this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
            this.exibir(true);
        })

        this.shadowRoot.querySelector('.cancel').addEventListener('click', () => {
            this.exibir(false);
        })

        if (this.getAttribute('mensagem-fundo')) {
            this.shadowRoot.querySelector('.container-mensagem').style.background = this.getAttribute('mensagem-fundo');
        }

        if (this.getAttribute('mensagem-cor')) {
            this.shadowRoot.querySelector('.container-mensagem').style.color = this.getAttribute('mensagem-cor');
        }
    }
}

window.customElements.define('notificacao-popup', NotificacaoPopup);