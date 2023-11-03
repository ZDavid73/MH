import "../../../export";

const enum recommendedSectionCardProperties {
    img = "img",
    title = "title",
    price = "price",
    description = "description"

}

export class recommendedSectionCard extends HTMLElement {
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
        this.attachShadow({ mode: "open" })
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
        link.setAttribute("href", "/src/components/mainPage/recommendedSection/recommendedSectionCard/recommendedSectionCard.css")
        this.shadowRoot?.appendChild(link)

        const cardContainer = this.ownerDocument.createElement("div")
        cardContainer.classList.add("recommendCardContainer")
        this.shadowRoot?.appendChild(cardContainer)
        
        const cardImageContainer = this.ownerDocument.createElement("div")
        cardImageContainer.classList.add("cardImageContainer")
        cardContainer.appendChild(cardImageContainer)
        
        const cardImage = this.ownerDocument.createElement("div")
        cardImage.classList.add("cardImage")
        cardImage.style.backgroundImage = `url(${this.properties.img})`
        cardImageContainer.appendChild(cardImage)
        
        const textContainer = this.ownerDocument.createElement("div")
        textContainer.classList.add("textContainer")
        cardContainer.appendChild(textContainer)
        
        const title = this.ownerDocument.createElement("h2")
        title.innerHTML = `${this.properties.title}`
        textContainer.appendChild(title)

        const priceText = this.ownerDocument.createElement("h3")
        priceText.innerHTML = `${this.properties.price}`
        textContainer.appendChild(priceText)

        const descriptionText = this.ownerDocument.createElement("p")
        descriptionText.innerHTML = `${this.properties.description}`
        textContainer.appendChild(descriptionText)
    }
}

customElements.define("recommended_section-card", recommendedSectionCard)