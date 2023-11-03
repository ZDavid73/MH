import "../../export";

export class MoreInfoSection extends HTMLElement {
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
            link.setAttribute("href", "/src/components/landingPage/moreInfoSection/moreInfoSection.css")
            this.shadowRoot.innerHTML = `
                <div class="more-info-container">
                <img src="/src/resources/jpg/chicaRubia.png" />
                    <div class="more-info-content">
                        <h1>A close feeling!</h1>
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
            this.shadowRoot.appendChild(link);

        }
    }
}

customElements.define('more-infosection', MoreInfoSection);
