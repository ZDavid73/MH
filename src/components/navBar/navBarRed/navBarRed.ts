import { dispatch } from "../../../store";
import { changeScreen, changeSeaarchText } from "../../../store/actions";
import { Screens } from "../../../types/screens";
import "../../export";

export class NavBarRed extends HTMLElement {
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
            link.setAttribute("href", "/src/components/navBar/navBarRed/navBarRed.css");
            this.shadowRoot.appendChild(link);

            const navContainer = this.ownerDocument.createElement("div")
            navContainer.setAttribute("id", "navbar")
            this.shadowRoot.appendChild(navContainer)

            const logo = this.ownerDocument.createElement("img")
            logo.setAttribute("id", "logo")
            logo.setAttribute("src", "/src/resources/svg/logo_light_new.svg")
            navContainer.appendChild(logo)

            const searchBarRed = this.ownerDocument.createElement("navsearchbar-red")
            navContainer.appendChild(searchBarRed)

            const horizontalSpace = this.ownerDocument.createElement("div")
            horizontalSpace.classList.add("horizontalSpace")
            navContainer.appendChild(horizontalSpace)

            const userButton = this.ownerDocument.createElement("img")
            userButton.classList.add("navIcon")
            userButton.setAttribute("src", "/src/resources/svg/navIcons/light/userLight.svg")
            navContainer.appendChild(userButton)

            const uploadButton = this.ownerDocument.createElement("img")
            uploadButton.classList.add("navIcon")
            uploadButton.setAttribute("src", "/src/resources/svg/navIcons/light/uploadLight.svg")
            navContainer.appendChild(uploadButton)

            const cartButton = this.ownerDocument.createElement("img")
            cartButton.classList.add("navIcon")
            cartButton.setAttribute("src", "/src/resources/svg/navIcons/light/cartLight.svg")
            navContainer.appendChild(cartButton)

            const menuButton = this.ownerDocument.createElement("img")
            menuButton.classList.add("navIcon")
            menuButton.setAttribute("src", "/src/resources/svg/navIcons/light/menuLight.svg")
            menuButton.setAttribute("screen", Screens.landingPage)
            navContainer.appendChild(menuButton)

            const rightSpace = this.ownerDocument.createElement("div")
            rightSpace.classList.add("rightSpace")
            navContainer.appendChild(rightSpace)

            logo.addEventListener("click", () => {
                dispatch(
                    changeSeaarchText("")
                )
                dispatch(
                    changeScreen(Screens.mainPage)
                )
            })
        }
    }
}

customElements.define('navbar-red', NavBarRed);
