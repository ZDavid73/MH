const queryString = window.location.search
console.log(queryString)

const params = new URLSearchParams(queryString)
console.log(params.get("search"))

class NavSearchBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.mount()
    }

    mount() {
        this.render()
        const searchInput = this.shadowRoot?.querySelector("input")
        const navSearchLogo = this.shadowRoot?.getElementById("navSearchLogo")
        searchInput?.addEventListener("input", () => {
            navSearchLogo?.addEventListener("click", () => {
                window.location.href = `/src/pages/search?search=${searchInput?.value}`
            })
            
        })
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
        searchInput.setAttribute("id", "searchInputNav")
        searchInput.setAttribute("placeholder", "Find what you want!")

        searchBarContainer.appendChild(searchLogo)
        searchBarContainer.appendChild(searchInput)

        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(searchBarContainer)
    }
}

customElements.define("nav-searchbar", NavSearchBar)

export default NavSearchBar