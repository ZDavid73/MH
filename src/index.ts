import "./components/navBar/navBar"
import "./components/categoriesSection/categoriesSection"
import "./components/advertisingSection/advertisingSection"

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
            //Creation of web components
            const navBar = this.ownerDocument.createElement("nav-bar")
            const categoriesSection = this.ownerDocument.createElement("categories-section")
            const advertisingSection = this.ownerDocument.createElement("advertising-section")
            //Append of this.shadowRoot
            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(navBar)
            this.shadowRoot.appendChild(categoriesSection)
            this.shadowRoot.appendChild(advertisingSection)
        }
       
    }
}

customElements.define("app-container", AppContainer)