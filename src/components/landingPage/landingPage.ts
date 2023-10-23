import "./navBar/navBar"
import "./moreInfoSection/moreInfoSection"
import "./descriptionSection/descriptionSection"

export default class LandingPage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
        
    }

    render()  {
        if (this.shadowRoot){
        const navBarlanding = this.ownerDocument.createElement('nav-barlanding');
        const descriptionSection = this.ownerDocument.createElement('description-section');
        const moreInfoSection = this.ownerDocument.createElement('more-infosection');

        this.shadowRoot.appendChild(navBarlanding);
        this.shadowRoot.appendChild(descriptionSection);
        this.shadowRoot.appendChild(moreInfoSection);
    }
    }
}

customElements.define('landing-page', LandingPage);
