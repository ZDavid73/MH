import "../../export"

export class SignUpMenu extends HTMLElement {
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
            link.setAttribute("href", "/src/components/signUp/signUpMenu/signUpMenu.css")
            this.shadowRoot.appendChild(link);

            const menuContainer = this.ownerDocument.createElement("div")
            menuContainer.setAttribute("id", "menuSignUp")
            this.shadowRoot.appendChild(menuContainer)
        }
    }
}

customElements.define("signup-menu", SignUpMenu)