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
            this.shadowRoot.innerHTML = ""

            switch (state.screen) {
                case Screens.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    break;
                case Screens.mainPage:
                    const mainPage = this.ownerDocument.createElement("main-page")
                    this.shadowRoot.appendChild(mainPage)
                    break;
                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)