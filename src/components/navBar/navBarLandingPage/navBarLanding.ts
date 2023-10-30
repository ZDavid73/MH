import { changeScreen } from "../../../store/actions";
import { dispatch } from "../../../store/index";
import { Screens } from "../../../types/screens";
import "../../export";

export class NavBarLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/navBar/navBarLandingPage/navBarLanding.css");
            this.shadowRoot.appendChild(link);

            const navContainer = this.ownerDocument.createElement("div")
            navContainer.setAttribute("id", "navbar")
            this.shadowRoot.appendChild(navContainer)

            const logo = this.ownerDocument.createElement("img")
            logo.setAttribute("src", "/src/resources/svg/logo_light_new.svg")
            navContainer.appendChild(logo)

            const horizontalSpace = this.ownerDocument.createElement("div")
            horizontalSpace.classList.add("horizontalSpace")
            navContainer.appendChild(horizontalSpace)

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.classList.add("button-container")
            navContainer.appendChild(buttonContainer)

            const buttonSignUp = this.ownerDocument.createElement("button")
            buttonSignUp.setAttribute("id", "sign-up")
            buttonSignUp.innerHTML = "Sign Up"
            buttonContainer.appendChild(buttonSignUp)

            const buttonLogin = this.ownerDocument.createElement("button")
            buttonLogin.setAttribute("id", "login")
            buttonLogin.innerHTML = "Sign In"
            buttonContainer.appendChild(buttonLogin)

            buttonSignUp.addEventListener("click", () => {
                dispatch(
                    changeScreen("mainPage")
                )
            })

        }
    }
}

customElements.define('nav-barlanding', NavBarLanding);
