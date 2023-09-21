class NavSearchBar extends HTMLElement {
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
        link.setAttribute("href", "/src/components/navBar/navSearchBar/navSearchBar.css")

        const searchBarContainer = this.ownerDocument.createElement("div")
        searchBarContainer.setAttribute("id", "navSearchBar")
        const searchLogo = this.ownerDocument.createElement("img")
        searchLogo.setAttribute("id" , "navSearchLogo")
        searchLogo.setAttribute("src" , "/src/resources/svg/search_icon.svg")
        const searchInput = this.ownerDocument.createElement("input")
        searchInput.setAttribute("placeholder", "Find what you want!")

        searchBarContainer.appendChild(searchLogo)
        searchBarContainer.appendChild(searchInput)

        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(searchBarContainer)
    }
}

customElements.define("nav-searchbar", NavSearchBar)

export default NavSearchBar