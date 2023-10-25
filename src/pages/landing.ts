import "../components/landingPage/landingPage"

export default class landingPagefinal extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "")
            const landingpageSection = this.ownerDocument.createElement("landing-page")

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(landingpageSection)
           
        }
       
    }
}

customElements.define("app-landingPagefinal", landingPagefinal)