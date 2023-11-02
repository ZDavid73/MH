import "../../components/export"

export class MainPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/appContainer.css")
            this.shadowRoot.appendChild(link)

            const navBar = this.ownerDocument.createElement("navbar-white")
            this.shadowRoot.appendChild(navBar)

            const categoriesSection = this.ownerDocument.createElement("categories-section")
            this.shadowRoot.appendChild(categoriesSection)

            const advertisingSection = this.ownerDocument.createElement("advertising-section")
            this.shadowRoot.appendChild(advertisingSection)

            const recommendedSection = this.ownerDocument.createElement("recommended-section")
            this.shadowRoot.appendChild(recommendedSection)
        }

    }
}

customElements.define("main-page", MainPage)