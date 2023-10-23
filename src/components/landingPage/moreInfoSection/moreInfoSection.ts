export default class MoreInfoSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <div class="more-info-container">
                    <div class="more-info-content">
                        <h2>A close feeling!</h2>
                        <p>The strong feeling of control and closeness of yout city in the comoddity of yout house. Take the trends of your shopping with a transparent advertaiment of products and clean sellers.</p>
                        <button id="read-more">Know more...</button>
                    </div>
                </div>
            `;

            const readMoreButton = this.shadowRoot.querySelector('#read-more');
            if (readMoreButton) {
                readMoreButton.addEventListener('click', () => {
                    console.log('Leer más');
                });
            } else {
                console.error('El botón "Leer más" no se encontró');
            }
        }
    }
}

customElements.define('more-infosection', MoreInfoSection);
