import "../../components/export"

export class SignUp extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/signUp/signUp.css")
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "SignUp")
            this.shadowRoot.appendChild(mainContainer)

            const navBarEmpty = this.ownerDocument.createElement('navbar-empty');
            mainContainer.appendChild(navBarEmpty);

            const signUpMenu = this.ownerDocument.createElement("signup-menu")
            mainContainer.appendChild(signUpMenu)
        }
    }
}

customElements.define("sign-up", SignUp)