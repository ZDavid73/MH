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
            document.body.classList.remove(...document.body.classList)

            switch (state.screen) {
                case Screens.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    document.body.classList.add("landingPage")
                    break;
                case Screens.signUp:
                    const signUpPage = this.ownerDocument.createElement("sign-up")
                    this.shadowRoot.appendChild(signUpPage)
                    break;
                case Screens.mainPage:
                    const mainPage = this.ownerDocument.createElement("main-page")
                    this.shadowRoot.appendChild(mainPage)
                    break;
                case Screens.logIn:
                    const logInPage = this.ownerDocument.createElement("login-page")
                    this.shadowRoot.appendChild(logInPage)
                    break;
                case Screens.forgotPassword:
                    const forgotPasswordPage = this.ownerDocument.createElement("forgotpassword-page")
                    this.shadowRoot.appendChild(forgotPasswordPage)
                    break;
                case Screens.searchPage:
                    const searchPage = this.ownerDocument.createElement("search-page")
                    this.shadowRoot.appendChild(searchPage)
                    break;
                case Screens.shopingList:
                    const shopingList = this.ownerDocument.createElement("shoping-list")
                    this.shadowRoot.appendChild(shopingList)
                    break;
                case Screens.productDetail:
                    const productDetail = this.ownerDocument.createElement("product-detail")
                    this.shadowRoot.appendChild(productDetail)
                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)