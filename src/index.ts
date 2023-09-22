import "./components/navBar/navBar"
import "./components/categoriesSection/categoriesSection"
import "./components/advertisingSection/advertisingSection"
import "./components/recommendedSection/recommendedSection"
import "./components/searchPage/searchPage"
import "./components/navBar/navIconButton/navIconButton"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/appContainer.css")
            //Creation of web components
            const navBar1 = this.ownerDocument.createElement("nav-bar")
            const categoriesSection = this.ownerDocument.createElement("categories-section")
            const advertisingSection = this.ownerDocument.createElement("advertising-section")
            const recommendedSection = this.ownerDocument.createElement("recommended-section")
            const navBar2 = this.ownerDocument.createElement("div")
            navBar2.setAttribute("id", "navBar2")
                const iconChat = this.ownerDocument.createElement("nav-iconbutton")
                const iconUpload = this.ownerDocument.createElement("nav-iconbutton")
                const iconHome = this.ownerDocument.createElement("nav-iconbutton")
                const iconShooping = this.ownerDocument.createElement("nav-iconbutton")
                const iconOptions = this.ownerDocument.createElement("nav-iconbutton")

                iconChat.setAttribute("icon", "/src/resources/svg/chat_icon.svg")
                iconUpload.setAttribute("icon", "/src/resources/svg/upload_icon.svg")
                iconHome.setAttribute("icon", "/src/resources/svg/home_icon_selected.svg")
                iconShooping.setAttribute("icon", "/src/resources/svg/shoopingCart_icon.svg")
                iconOptions.setAttribute("icon", "/src/resources/svg/options_icon.svg")

                navBar2.appendChild(iconChat)
                navBar2.appendChild(iconUpload)
                navBar2.appendChild(iconHome)
                navBar2.appendChild(iconShooping)
                navBar2.appendChild(iconOptions)
            //Append of this.shadowRoot
            
            this.shadowRoot.appendChild(link)
            this.shadowRoot.appendChild(navBar1)
            this.shadowRoot.appendChild(categoriesSection)
            this.shadowRoot.appendChild(advertisingSection)
            this.shadowRoot.appendChild(recommendedSection)
            this.shadowRoot.appendChild(navBar2)
        }
       
    }
}

customElements.define("app-container", AppContainer)