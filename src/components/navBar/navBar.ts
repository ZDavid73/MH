import  "./navSearchBar/navSearchBar"
import "./navIconButton/navIconButton"

class NavBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/navBar/navBar.css")

        const navContainer = this.ownerDocument.createElement("nav")
        navContainer.setAttribute("id", "navBar")

        const logo = this.ownerDocument.createElement("img")
        logo.setAttribute("src", "/src/resources/svg/logo_dark_v.svg")
        logo.setAttribute("id", "logoNav")
        const navSearchBar = this.ownerDocument.createElement("nav-searchbar")
        const searchIcon = this.ownerDocument.createElement("nav-iconbutton")
        searchIcon.classList.add("itemPhone")
        searchIcon.setAttribute("icon", "/src/resources/svg/chat_icon.svg")
        const userIcon = this.ownerDocument.createElement("nav-iconbutton")
        userIcon.setAttribute("id", "userIcon")
        userIcon.setAttribute("icon", "/src/resources/svg/userProfile_logo.svg")
        const uploadIcon = this.ownerDocument.createElement("nav-iconbutton")
        uploadIcon.setAttribute("icon", "/src/resources/svg/upload_icon.svg")
        uploadIcon.classList.add("itemPhone")
        const shoopingCartIcon = this.ownerDocument.createElement("nav-iconbutton")
        shoopingCartIcon.setAttribute("icon", "/src/resources/svg/shoopingCart_icon.svg")
        shoopingCartIcon.classList.add("itemPhone")
        const optionsIcon = this.ownerDocument.createElement("nav-iconbutton")
        optionsIcon.setAttribute("icon", "/src/resources/svg/options_icon.svg")
        optionsIcon.classList.add("itemPhone")

        const horizontalSpace = this.ownerDocument.createElement("div")
        horizontalSpace.classList.add("horizontalSpace")

        navContainer.appendChild(logo)
        navContainer.appendChild(navSearchBar)

        navContainer.appendChild(horizontalSpace)

        navContainer.appendChild(searchIcon)
        navContainer.appendChild(userIcon)
        navContainer.appendChild(uploadIcon)
        navContainer.appendChild(shoopingCartIcon)
        navContainer.appendChild(optionsIcon)

        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(navContainer)
    }
}

customElements.define("nav-bar", NavBar)

export default NavBar