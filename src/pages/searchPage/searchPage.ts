import "../../components/export"
import { dataGeneral } from "../../../data"
import { state } from "../../store"

export class SearchPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/searchPage/searchPage.css")
            this.shadowRoot.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "searchPage")
            this.shadowRoot.appendChild(mainContainer)

            const navBar = this.ownerDocument.createElement("navbar-red")
            mainContainer.appendChild(navBar)

            const mainSearchContainer = this.ownerDocument.createElement("div")
            mainSearchContainer.setAttribute("id", "mainSearchContainer")
            mainContainer.appendChild(mainSearchContainer)

            const optionsContainer = this.ownerDocument.createElement("div")
            optionsContainer.setAttribute("id", "optionsContainer")
            mainSearchContainer.appendChild(optionsContainer)

            const resultsContainer = this.ownerDocument.createElement("div")
            resultsContainer.setAttribute("id", "resultsContainer")
            mainSearchContainer.appendChild(resultsContainer)

            const optionsTitle = this.ownerDocument.createElement("h2")
            optionsTitle.innerHTML = `Results for "${state.searchText}"...`
            optionsContainer.appendChild(optionsTitle)

            const optionsInformation = this.ownerDocument.createElement("options-information")
            optionsContainer.appendChild(optionsInformation)

            dataGeneral.recommended.map((product) => {
                if (product.title.toLowerCase().includes(state.searchText!)) {
                    const productResultCard = this.ownerDocument.createElement("search_results-card")
                    productResultCard.setAttribute("img", `${product.img}`)
                    productResultCard.setAttribute("title", `${product.title}`)
                    productResultCard.setAttribute("price", `${product.price}`)
                    productResultCard.setAttribute("desc", `${product.description}`)
                    resultsContainer.appendChild(productResultCard)
                }
            })
        }

    }

}

customElements.define("search-page", SearchPage)