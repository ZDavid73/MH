import "../../export"

const queryString = window.location.search
console.log(queryString)

const params = new URLSearchParams(queryString)
console.log(params.get("search"))

export class NavSearchBarWhite extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/navBar/navSearchBarWhite/navSearchBarWhite.css")

        const searchBarContainer = this.ownerDocument.createElement("div")
        searchBarContainer.setAttribute("id", "navSearchBar")
        const searchLogo = this.ownerDocument.createElement("img")
        searchLogo.setAttribute("id" , "navSearchLogo")
        searchLogo.setAttribute("src" , "/src/resources/svg/navIcons/searchLight.svg")
        const searchInput = this.ownerDocument.createElement("input")
        searchInput.setAttribute("id", "searchInputNav")
        searchInput.setAttribute("placeholder", "Find what you want!")

        searchBarContainer.appendChild(searchLogo)
        searchBarContainer.appendChild(searchInput)

        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(searchBarContainer)
    }
}

customElements.define("navsearchbar-white", NavSearchBarWhite)