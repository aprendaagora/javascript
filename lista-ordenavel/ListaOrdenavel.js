const template_lista = document.createElement('template');

template_lista.innerHTML = `

    <style>
    
        ul {
            border: 1px solid var(--cor-borda);
            color: var(--cor-texto);
            padding: 0;
            list-style-type: none;
        }

        li {
            background-color: #fff;
            display: flex;
            flex: 1;
        }

        li:not(:last-of-type) {
            border-bottom: 1px solid var(--cor-borda);
        }

        .numero {
            background-color: var(--cor-fundo);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            height: 60px;
            width: 60px;
        }

        li.correto  .pessoa-nome {
            color: #3ae374;
        }

        li.incorreto  .pessoa-nome {
            color: #ff3838;
        }

        .pessoa-nome {
            margin: 0 20px 0 0;
        }

        .arrastavel {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            flex: 1;
        }

        .btn-checar {
            background-color: darkgrey;
            border: none;
            color: white;
            font-size: 16px;
            padding: 10px 20px;
            cursor: pointer;
        }

        .btn-checar:active {
            transform: scale(0.98);
        }

        .btn-checar:focus {
            outline: none;
        }

        .over {
            background-color: darkgrey;
        }
    
    </style>

    <ul class="lista-ordenavel" id="lista-ordenavel">
    </ul>

    <button class="btn-checar" id="checar">
        Checar ordem
    </button>
`;


class ListaOrdenavel extends HTMLElement {

    constructor() {

        super();

        this.pessoasRicas = [
            'Jeff Bezos',
            'Bill Gates',
            'Warren Buffett',
            'Bernard Arnault',
            'Carlos Slim Helu',
            'Amancio Ortega',
            'Larry Ellison',
            'Mark Zuckerberg',
            'Michael Bloomberg',
            'Larry Page'
        ]

        this.dragStartIndex;

        this.itensLista = [];

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.appendChild(template_lista.content.cloneNode(true));
    }


    criarLista() {

        let lista = [...this.pessoasRicas]
        .map(item => ({ valor: item, ordem: Math.random() }))
        .sort((a, b) => a.ordem - b.ordem)
        .map(a => a.valor)
        .forEach((pessoa, indice) => {

            console.log(indice, pessoa);

            const itemLista = document.createElement('li');

            itemLista.setAttribute('data-indice', indice);

            itemLista.innerHTML = `

                <span class="numero">${indice + 1}</span>

                <div class="arrastavel" draggable="true">
                    <p class="pessoa-nome">${pessoa}</p>
                    <span class="botao-arrastar">=</span>
                </div>
                 
            `;

            this.itensLista.push(itemLista);

            this.shadow.querySelector('#lista-ordenavel').appendChild(itemLista);
        })
    }

    dragStart() {
        this.dragStartIndex = +this.closest("li").getAttribute('data-indice');
        console.log(this.dragStartIndex)
    }

    dragEnter() {
        this.classList.add('over');
    }

    dragLeave() { 
        this.classList.remove('over');
    }

    dragOver(e) {
        e.preventDefault();
    }

    trocarItens(indiceOrigem, indiceDestino) {

        console.log(indiceOrigem);
        console.log(indiceDestino);
        console.log(this.itensLista)

        const itemUm = this.itensLista[indiceOrigem].querySelector('.arrastavel');

        const itemDois = this.itensLista[indiceDestino].querySelector('.arrastavel');
        
        console.log(itemUm, itemDois);
    }

    
    dragDrop() {
      
        const dragEndIndex = +this.getAttribute('data-indice');
       
        console.log(this)

        this.trocarItens(this.dragStartIndex, dragEndIndex);

        this.classList.remove('over');
    }

    

    adicionarEventListeners() {

        const arrastaveis = this.shadow.querySelectorAll('.arrastavel');

        const itens = this.shadow.querySelectorAll('li');

        arrastaveis.forEach(arrastavel => {
            arrastavel.addEventListener('dragstart', this.dragStart);
        })

        itens.forEach(item => {
            item.addEventListener('dragover', this.dragOver);
            item.addEventListener('drop', this.dragDrop.bind(this));
            item.addEventListener('dragenter', this.dragEnter);
            item.addEventListener('dragleave', this.dragLeave);
        })
    }

    connectedCallback() {
        this.criarLista();
        this.adicionarEventListeners();
    }
}

window.customElements.define('lista-ordenavel', ListaOrdenavel);