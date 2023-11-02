import "../../export"

export class forgotPasswordMenu extends HTMLElement {
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
            link.setAttribute("href", "/src/components/forgotPassword/forgotPasswordMenu/forgotPasswordMenu.css")
            this.shadowRoot.appendChild(link);

            const menuForgotPasswordContainer = this.ownerDocument.createElement("div")
            menuForgotPasswordContainer.setAttribute("id", "menuForgotPasswordContainer")
            this.shadowRoot.appendChild(menuForgotPasswordContainer)

            const title = this.ownerDocument.createElement("h1")
            title.innerText = "Forgot your password"
            menuForgotPasswordContainer.appendChild(title)

            const description = this.ownerDocument.createElement("p")
            description.innerText = "Enter the code that we send you to your email example@gmail.com to recover your password..."
            menuForgotPasswordContainer.appendChild(description)

            const codeInput = this.ownerDocument.createElement("signup-input")
            codeInput.setAttribute("placeholder", "Insert code")
            menuForgotPasswordContainer.appendChild(codeInput)

            const newPasswordInput = this.ownerDocument.createElement("signup-input")
            newPasswordInput.setAttribute("icon", "/src/resources/svg/Icons/Lock.svg")
            newPasswordInput.setAttribute("placeholder", "New password")
            menuForgotPasswordContainer.appendChild(newPasswordInput)

            const confirmNewPasswordInput = this.ownerDocument.createElement("signup-input")
            confirmNewPasswordInput.setAttribute("icon", "/src/resources/svg/Icons/Lock.svg")
            confirmNewPasswordInput.setAttribute("placeholder", "Confirm new password")
            menuForgotPasswordContainer.appendChild(confirmNewPasswordInput)

            const changePasswordButton = this.ownerDocument.createElement("button")
            changePasswordButton.innerText = "CHANGE PASSWORD"
            menuForgotPasswordContainer.appendChild(changePasswordButton)
            

        }
    }
}

customElements.define("forgotpassword-menu", forgotPasswordMenu)