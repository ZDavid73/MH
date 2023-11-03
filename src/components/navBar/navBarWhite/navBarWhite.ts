import { dispatch } from "../../../store";
import { changeScreen, changeSeaarchText } from "../../../store/actions";
import { Screens } from "../../../types/screens";
import "../../export";

export class NavBarWhite extends HTMLElement {
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
            link.setAttribute("href", "/src/components/navBar/navBarWhite/navBarWhite.css");
            this.shadowRoot.appendChild(link);

            const navContainer = this.ownerDocument.createElement("div")
            navContainer.setAttribute("id", "navbar")
            this.shadowRoot.appendChild(navContainer)

            const logo = this.ownerDocument.createElement("img")
            logo.setAttribute("id", "logo")
            logo.setAttribute("src", "/src/resources/svg/logo_dark_new.svg")
            navContainer.appendChild(logo)

            const searchBarRed = this.ownerDocument.createElement("navsearchbar-white")
            navContainer.appendChild(searchBarRed)

            const horizontalSpace = this.ownerDocument.createElement("div")
            horizontalSpace.classList.add("horizontalSpace")
            navContainer.appendChild(horizontalSpace)

            const userButton = this.ownerDocument.createElement("img")
            userButton.classList.add("navIcon")
            userButton.setAttribute("src", "/src/resources/svg/navIcons/dark/userDark.svg")
            navContainer.appendChild(userButton)

            const uploadButton = this.ownerDocument.createElement("img")
            uploadButton.classList.add("navIcon")
            uploadButton.setAttribute("src", "/src/resources/svg/navIcons/dark/uploadDark.svg")
            navContainer.appendChild(uploadButton)

            const cartButton = this.ownerDocument.createElement("img")
            cartButton.classList.add("navIcon")
            cartButton.setAttribute("src", "/src/resources/svg/navIcons/dark/cartDark.svg")
            navContainer.appendChild(cartButton)

            const menuButton = this.ownerDocument.createElement("img")
            menuButton.classList.add("navIcon")
            menuButton.setAttribute("src", "/src/resources/svg/navIcons/dark/menuDark.svg")
            navContainer.appendChild(menuButton)

            const rightSpace = this.ownerDocument.createElement("div")
            rightSpace.classList.add("rightSpace")
            navContainer.appendChild(rightSpace)

            logo.addEventListener("click", () => {
                dispatch(
                    changeSeaarchText("prueba")
                )
                dispatch(
                    changeScreen(Screens.mainPage)
                )
            })
        }
    }
}

customElements.define('navbar-white', NavBarWhite);
