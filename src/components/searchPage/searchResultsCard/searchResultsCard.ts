const enum searchResultsCardProperties {
    img = "img",
    title = "title",
    price = "price",
    desc = "desc"
}

export class searchResultsCard extends HTMLElement {
    properties: Record<searchResultsCardProperties, string> = {
        img: "",
        title: "",
        price: "",
        desc: ""
    }

    static get observedAttributes() {
        const properties: Record<searchResultsCardProperties, null> = {
            img: null,
            title: null,
            price: null,
            desc: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: searchResultsCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case searchResultsCardProperties.img:
                this.properties.img = newValue
                break;
            case searchResultsCardProperties.title:
                this.properties.title = newValue
                break;
            case searchResultsCardProperties.price:
                this.properties.price = newValue
                break;
            case searchResultsCardProperties.desc:
                this.properties.desc = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/searchPage/searchResultsCard/searchResultsCard.css")
        this.shadowRoot?.appendChild(link)

        const cardContainer = this.ownerDocument.createElement("div")
        cardContainer.classList.add("cardResultCotainer")
        this.shadowRoot?.appendChild(cardContainer)

        const productImgContainer = this.ownerDocument.createElement("div")
        productImgContainer.classList.add("productImgContainer")
        productImgContainer.style.backgroundImage = `url(${this.properties.img})`
        cardContainer.appendChild(productImgContainer)

        const productInfoContainer = this.ownerDocument.createElement("div")
        productInfoContainer.classList.add("productInfoContainer")
        cardContainer.appendChild(productInfoContainer)

        const infoTitle = this.ownerDocument.createElement("h2")
        infoTitle.innerHTML = `${this.properties.title}`
        productInfoContainer.appendChild(infoTitle)

        const infoPrice = this.ownerDocument.createElement("h3")
        infoPrice.innerHTML = `${this.properties.price}`
        productInfoContainer.appendChild(infoPrice)

        const infoDesc = this.ownerDocument.createElement("p")
        infoDesc.innerHTML = `${this.properties.desc}`
        productInfoContainer.appendChild(infoDesc)
    }
}

customElements.define("search_results-card", searchResultsCard)