import { changeScreen } from "../../../store/actions";
import { dispatch } from "../../../store/index";
import { Screens } from "../../../types/screens";
import "../../export";

export class NavBarLanding extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element.
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Verifica si shadowRoot está disponible
        if (this.shadowRoot) {
            // Crear un elemento link para referenciar el archivo CSS
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/navBar/navBarLandingPage/navBarLanding.css");
            this.shadowRoot.appendChild(link);

            // Establecer el contenido interno del shadowRoot
            // this.shadowRoot.innerHTML = `
            //     <div id="navbar">
            //         <img src="/src/resources/svg/logo_dark_v.svg" alt="logoNav" /> 
            //         <div class="button-container">
            //         <button id="sign-up">sign-up</button>
            //         <button id="login">login</button>
            //         <div/>
            //     </div>
            // `;

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

// Definir el nuevo custom element
customElements.define('nav-barlanding', NavBarLanding);
