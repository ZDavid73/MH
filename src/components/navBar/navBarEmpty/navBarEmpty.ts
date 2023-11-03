import { changeScreen } from "../../../store/actions";
import { dispatch } from "../../../store/index";
import { Screens } from "../../../types/screens";
import "../../export";

export class NavBarEmpty extends HTMLElement {
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
            link.setAttribute("href", "/src/components/navBar/navBarEmpty/navBarEmpty.css");
            this.shadowRoot.appendChild(link);

            const navContainer = this.ownerDocument.createElement("div")
            navContainer.setAttribute("id", "navbar")
            this.shadowRoot.appendChild(navContainer)

            const logo = this.ownerDocument.createElement("img")
            logo.setAttribute("src", "/src/resources/svg/logo_light_new.svg")
            navContainer.appendChild(logo)

            logo.addEventListener("click", () => {
                dispatch(
                    changeScreen(Screens.landingPage)
                )
            })
        }
    }
}

customElements.define('navbar-empty', NavBarEmpty);
