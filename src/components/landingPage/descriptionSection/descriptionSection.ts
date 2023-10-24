export default class DescriptionSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/landingPage/descriptionSection/descriptionSection.css")
            this.shadowRoot.innerHTML = `
                <div class="description-container">
                    <div class="description-content">
                        <h1>Your new market page!</h1>
                        <p>A place where you can buy everything you need with that close feeling of neighborhood.</p>
                        <img src="/src/resources/jpg/mujer-posando-saltando-sosteniendo-bolsas-compra 1.png"/> 
                        <div class="action-buttons">
                            <button id="shop">Go to store!</button>
                            <button id="create-account">Create free account</button>
                        </div>
                    </div>
                </div>
            `;

            this.shadowRoot.querySelector('#shop')!.addEventListener('click', () => { 
                console.log('Ir a la tienda');
            });

            this.shadowRoot.querySelector('#create-account')!.addEventListener('click', () => { 
                console.log('Crear cuenta');
            });
            this.shadowRoot.appendChild(link);

        }
    }
}

customElements.define('description-section', DescriptionSection);

