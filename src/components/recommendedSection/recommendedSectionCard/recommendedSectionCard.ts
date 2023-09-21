const enum recommendedSectionCardProperties {
    img = "img",
    title = "title",
    price = "price",
    description = "description"

}

class recommendedSectionCard extends HTMLElement {
    properties: Record<recommendedSectionCardProperties, string> = {
        img: "",
        title: "",
        price: "",
        description: ""
    }
    
    static get observedAttributes() {
        const properties: Record<recommendedSectionCardProperties, null> = {
            img: null,
            title: null,
            price: null,
            description: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: recommendedSectionCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case recommendedSectionCardProperties.img:
                this.properties.img = newValue
                break;
            case recommendedSectionCardProperties.title:
                this.properties.title = newValue
                break;
            case recommendedSectionCardProperties.price:
                this.properties.price = newValue
                break;
            case recommendedSectionCardProperties.description:
                this.properties.description = newValue
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
        link.setAttribute("href", "/src/components/recommendedSection/recommendedSectionCard/recommendedSectionCard.css")
        //Creation of father
        const cardContainer = this.ownerDocument.createElement("div")
        cardContainer.classList.add("recommendCardContainer")
        //Creation of childs
        const cardImageContainer = this.ownerDocument.createElement("div")
        cardImageContainer.classList.add("cardImageContainer")
        const cardImage = this.ownerDocument.createElement("img")
        cardImage.classList.add("cardImage")
        cardImage.setAttribute("src", `${this.properties.img}`)
        const textContainer = this.ownerDocument.createElement("div")
        textContainer.classList.add("textContainer")
        const title = this.ownerDocument.createElement("h2")
        title.innerHTML = `${this.properties.title}`
        const priceText = this.ownerDocument.createElement("h3")
        priceText.innerHTML = `${this.properties.price}`
        const descriptionText = this.ownerDocument.createElement("p")
        descriptionText.innerHTML = `${this.properties.description}`
        //Append childs of cardContainer
        cardImageContainer.appendChild(cardImage)
        cardContainer.appendChild(cardImageContainer)
        textContainer.appendChild(title)
        textContainer.appendChild(priceText)
        textContainer.appendChild(descriptionText)
        cardContainer.appendChild(textContainer)
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(cardContainer)
    }
}

customElements.define("recommended_section-card", recommendedSectionCard)

export default recommendedSectionCard