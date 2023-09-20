import "./components/navBar/navBar"

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

            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(navBar)
        }
       
    }
}

customElements.define("app-container", AppContainer)