import { dispatch } from "../../../store"
import { changeScreen } from "../../../store/actions"
import { Screens } from "../../../types/screens"
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

            const title = this.ownerDocument.createElement("h1")
            title.innerHTML = "MarketHub"
            menuContainer.appendChild(title)

            const subTitle = this.ownerDocument.createElement("h2")
            subTitle.innerHTML = "Register to start shopping!"
            menuContainer.appendChild(subTitle)

            const nameInput = this.ownerDocument.createElement("signup-input")
            nameInput.setAttribute("icon", "/src/resources/svg/Icons/User.svg")
            nameInput.setAttribute("placeholder", "Name")
            menuContainer.appendChild(nameInput)

            const lastName = this.ownerDocument.createElement("signup-input")
            lastName.setAttribute("icon", "/src/resources/svg/Icons/User.svg")
            lastName.setAttribute("placeholder", "Last name")
            menuContainer.appendChild(lastName)

            const email = this.ownerDocument.createElement("signup-input")
            email.setAttribute("icon", "/src/resources/svg/Icons/Email.svg")
            email.setAttribute("placeholder", "Email")
            menuContainer.appendChild(email)

            const cellphone = this.ownerDocument.createElement("signup-input")
            cellphone.setAttribute("icon", "/src/resources/svg/Icons/Cellphone.svg")
            cellphone.setAttribute("placeholder", "Cellphone")
            menuContainer.appendChild(cellphone)

            const password = this.ownerDocument.createElement("signup-input")
            password.setAttribute("icon", "/src/resources/svg/Icons/Lock.svg")
            password.setAttribute("placeholder", "Password")
            menuContainer.appendChild(password)

            const confirmPassword = this.ownerDocument.createElement("signup-input")
            confirmPassword.setAttribute("icon", "/src/resources/svg/Icons/Lock.svg")
            confirmPassword.setAttribute("placeholder", "Confirm Password")
            menuContainer.appendChild(confirmPassword)

            const createAccountButton = this.ownerDocument.createElement("button")
            createAccountButton.innerHTML = "CREATE ACCOUNT"
            menuContainer.appendChild(createAccountButton)

            createAccountButton.addEventListener("click", () => {
                dispatch(
                    changeScreen(Screens.mainPage)
                )
            })

        }
    }
}

customElements.define("signup-menu", SignUpMenu)