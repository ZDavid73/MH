import { state, addObserver } from "./store/index"
import { Screens } from "./types/screens"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            switch (state.screen) {
                case Screens.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    break;
                case Screens.mainPage:

                    break;

                default:
                    break;
            }
            // const link = this.ownerDocument.createElement("link")
            // link.setAttribute("rel", "stylesheet")
            // link.setAttribute("href", "/src/appContainer.css")
            // const navBar = this.ownerDocument.createElement("nav-bar")
            // const categoriesSection = this.ownerDocument.createElement("categories-section")
            // const advertisingSection = this.ownerDocument.createElement("advertising-section")
            // const recommendedSection = this.ownerDocument.createElement("recommended-section")

            // this.shadowRoot.appendChild(link)
            // this.shadowRoot.appendChild(navBar)
            // this.shadowRoot.appendChild(categoriesSection)
            // this.shadowRoot.appendChild(advertisingSection)
            // this.shadowRoot.appendChild(recommendedSection)



        }

    }
}

customElements.define("app-container", AppContainer)