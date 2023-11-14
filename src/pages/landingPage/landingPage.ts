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
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/landingPage/landingPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "landingPage")
            this.shadowRoot.appendChild(mainContainer)

            const navBarlanding = this.ownerDocument.createElement('nav-barlanding');
            const descriptionSection = this.ownerDocument.createElement('description-section');
            const moreInfoSection = this.ownerDocument.createElement('more-infosection');
            const moreInfoSectiontwo = this.ownerDocument.createElement('more-infosectiontwo');
            const landingFooter = this.ownerDocument.createElement("landing-footer")

            mainContainer.appendChild(navBarlanding);
            mainContainer.appendChild(descriptionSection);
            mainContainer.appendChild(moreInfoSection);
            mainContainer.appendChild(moreInfoSectiontwo);
            mainContainer.appendChild(landingFooter)
        }
    }
}

customElements.define("landing-page", LandingPage)