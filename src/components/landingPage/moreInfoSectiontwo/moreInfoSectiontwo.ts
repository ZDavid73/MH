import "../../export";

export class MoreInfoSectiontwo extends HTMLElement {
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
            link.setAttribute("href", "/src/components/landingPage/moreInfoSectiontwo/moreInfoSectiontwo.css")
            this.shadowRoot.innerHTML = `
                <div class="more-info-containertwo">
                    <div class="more-info-content">
                        <h2>Brand new things for your home!</h2>
                        <p>Find everything you would need for the commodities of your place. Buy all sort of furniture and decorations to make your house feel like yours.</p>
                        <img src="/src/resources/jpg/comodo-sillon-gris-aislado-sobre-fondo-blanco 1.png" /> 
                    </div>
                </div>
            `;

            this.shadowRoot.appendChild(link);

        }
    }
}

customElements.define('more-infosectiontwo', MoreInfoSectiontwo );