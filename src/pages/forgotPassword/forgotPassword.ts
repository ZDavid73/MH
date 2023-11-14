import "../../components/export"

export class forgotPasswordPage extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/forgotPassword/forgotPassword.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "forgotPasswordPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarEmpty = this.ownerDocument.createElement('navbar-empty');
            mainContainer.appendChild(navBarEmpty)

            const forgotPasswordMenu = this.ownerDocument.createElement("forgotpassword-menu")
            mainContainer.appendChild(forgotPasswordMenu)

        }
    }
}

customElements.define("forgotpassword-page", forgotPasswordPage)