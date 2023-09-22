const enum searchResultsCardProperties {
    img = "img",
    title = "title",
    price = "price",
    desc = "desc"
}

class searchResultsCard extends HTMLElement {
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
        this.attachShadow({mode: "open"})
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
        //Creation of main container
        const cardContainer = this.ownerDocument.createElement("div")
        cardContainer.classList.add("cardResultCotainer")
            //Creation of cardContainer elements
            const productImgContainer = this.ownerDocument.createElement("div")
            productImgContainer.classList.add("productImgContainer")
            const productInfoContainer = this.ownerDocument.createElement("div")
            productInfoContainer.classList.add("productInfoContainer")
                //Creation of productImgContainer elements
                const productImg = this.ownerDocument.createElement("img")
                productImg.setAttribute("src", `${this.properties.img}`)
                //Adding children of productImgContainer
                productImgContainer.appendChild(productImg)
                //Creation of productInfoContainer elements
                const infoTitle = this.ownerDocument.createElement("h2")
                infoTitle.innerHTML = `${this.properties.title}`
                const infoPrice = this.ownerDocument.createElement("h3")
                infoPrice.innerHTML = `${this.properties.price}`
                const infoDesc = this.ownerDocument.createElement("p")
                infoDesc.innerHTML = `${this.properties.desc}`
                //Adding children of productInfoContainer
                productInfoContainer.appendChild(infoTitle)
                productInfoContainer.appendChild(infoPrice)
                productInfoContainer.appendChild(infoDesc)
        //Adding childs of cardContainer
        cardContainer.appendChild(productImgContainer) 
        cardContainer.appendChild(productInfoContainer)
        //Adding childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(cardContainer)
    }
}

customElements.define("search_results-card", searchResultsCard)

export default searchResultsCard