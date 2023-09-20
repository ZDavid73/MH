import "./components/navBar/navBar"
import "./components/categoriesSection/categoriesSection"

class AppContainer extends HTMLElement {
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
            link.setAttribute("href", "/src/appContainer.css")

            const navBar = this.ownerDocument.createElement("nav-bar")
            const categoriesSection = this.ownerDocument.createElement("categories-section")

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(navBar)
            this.shadowRoot.appendChild(categoriesSection)
        }
       
    }
}

customElements.define("app-container", AppContainer)