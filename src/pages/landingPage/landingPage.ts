import "../../components/export"

export class LandingPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "./landingPage.css")
        if (this.shadowRoot) {

            const navBarlanding = this.ownerDocument.createElement('nav-barlanding');
            const descriptionSection = this.ownerDocument.createElement('description-section');
            const moreInfoSection = this.ownerDocument.createElement('more-infosection');
            const moreInfoSectiontwo = this.ownerDocument.createElement('more-infosectiontwo');

            this.shadowRoot.appendChild(navBarlanding);
            this.shadowRoot.appendChild(descriptionSection);
            this.shadowRoot.appendChild(moreInfoSection);
            this.shadowRoot.appendChild(moreInfoSectiontwo);
            this.shadowRoot.appendChild(link);

        }
    }
}

customElements.define("landing-page", LandingPage)