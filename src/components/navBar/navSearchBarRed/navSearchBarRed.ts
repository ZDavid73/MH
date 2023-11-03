import { dispatch } from "../../../store"
import { changeScreen, changeSeaarchText } from "../../../store/actions"
import { Screens } from "../../../types/screens"
import "../../export"

const queryString = window.location.search
console.log(queryString)

const params = new URLSearchParams(queryString)
console.log(params.get("search"))

export class NavSearchBarRed extends HTMLElement {
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
        link.setAttribute("href", "/src/components/navBar/navSearchBarRed/navSearchBarRed.css")
        this.shadowRoot?.appendChild(link)

        const searchBarContainer = this.ownerDocument.createElement("div")
        searchBarContainer.setAttribute("id", "navSearchBar")
        this.shadowRoot?.appendChild(searchBarContainer)

        const searchLogo = this.ownerDocument.createElement("img")
        searchLogo.setAttribute("id", "navSearchLogo")
        searchBarContainer.appendChild(searchLogo)

        searchLogo.setAttribute("src", "/src/resources/svg/navIcons/searchDark.svg")
        const searchInput = this.ownerDocument.createElement("input")

        searchInput.setAttribute("id", "searchInputNav")
        searchInput.setAttribute("placeholder", "Find what you want!")
        searchBarContainer.appendChild(searchInput)

        searchLogo.addEventListener("click", () => {
            dispatch(
                changeSeaarchText(searchInput.value)
            )

            dispatch(
                changeScreen(Screens.searchPage)
            )
        })
    }
}

customElements.define("navsearchbar-red", NavSearchBarRed)