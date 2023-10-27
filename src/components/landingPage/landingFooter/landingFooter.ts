import "../../export";

export class LandingFooter extends HTMLElement {
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
            link.setAttribute("href", "/src/components/landingPage/landingFooter/landingFotter.css")
            this.shadowRoot.appendChild(link);

            const footerContainer = this.ownerDocument.createElement("div")
            footerContainer.classList.add("footer")
            this.shadowRoot.appendChild(footerContainer)

            const logo = this.ownerDocument.createElement("img")
            logo.setAttribute("src", "/src/resources/svg/logo_light_new.svg")
            footerContainer.appendChild(logo)
        }
    }
}

customElements.define('landing-footer', LandingFooter );