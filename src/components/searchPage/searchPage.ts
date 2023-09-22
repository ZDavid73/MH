import * as componentsExport from "../export"
import { dataGeneral } from "../../../data"

const querystring = window.location.search
const params = new URLSearchParams(querystring)
const searchText = params.get("search")?.toLowerCase()


class SearchPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            //Creation of link
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/searchPage/searchPage.css")
            //Creation of main components
            const navBar = this.ownerDocument.createElement("nav-bar")
            const mainSearchContainer = this.ownerDocument.createElement("div")
            mainSearchContainer.setAttribute("id", "mainSearchContainer")
                //Creation of mainContainer elements
                const optionsContainer = this.ownerDocument.createElement("div")
                optionsContainer.setAttribute("id", "optionsContainer")
                const resultsContainer = this.ownerDocument.createElement("div")
                resultsContainer.setAttribute("id", "resultsContainer")
                    //Creation of optionsContainer elements
                    const optionsTitle = this.ownerDocument.createElement("h2")
                    const optionsInformation = this.ownerDocument.createElement("options-information")
                    //Attributes of childs of optionsContainer
                    optionsTitle.innerHTML = `Results for "${searchText}"...`
                    //Creation of resultsContainer elements
                    dataGeneral.search.map( (product) => {
                        if (product.title.toLowerCase().includes(searchText!)) {
                            const productResultCard = this.ownerDocument.createElement("search_results-card")
                            productResultCard.setAttribute("img", `${product.img}`)
                            productResultCard.setAttribute("title", `${product.title}`)
                            productResultCard.setAttribute("price", `${product.price}`)
                            productResultCard.setAttribute("desc", `${product.description}`)
                            resultsContainer.appendChild(productResultCard)
                        }
                    } )
                //Adding children of the optionsContainer
                optionsContainer.appendChild(optionsTitle)
                optionsContainer.appendChild(optionsInformation)
            //Adding children of mainSearchContainer
            mainSearchContainer.appendChild(optionsContainer)
            mainSearchContainer.appendChild(resultsContainer)
            //Adding children of this.shadowRoot
            this.shadowRoot?.appendChild(link)
            this.shadowRoot.appendChild(navBar)
            this.shadowRoot.appendChild(mainSearchContainer)
        }

    }
}

customElements.define("search-page", SearchPage)

export default SearchPage