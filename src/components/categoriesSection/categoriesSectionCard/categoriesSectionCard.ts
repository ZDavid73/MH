const enum CategoriesSectionCardProperties {
    img = "img",
    text = "text"
}

class CategoriesSectionCard extends HTMLElement {
    properties: Record<CategoriesSectionCardProperties, string> = {
        img: "",
        text: ""
    }
    
    static get observedAttributes() {
        const properties: Record<CategoriesSectionCardProperties, null> = {
            img: null,
            text: null,
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: CategoriesSectionCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case CategoriesSectionCardProperties.img:
                this.properties.img = newValue
                break;
            case CategoriesSectionCardProperties.text:
                this.properties.text = newValue
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
        link.setAttribute("href", "/src/components/categoriesSection/categoriesSectionCard/categoriesSectionCard.css")
        //Creation of father
        const cardContainer = this.ownerDocument.createElement("div")
        cardContainer.classList.add("categoriesCardContainer")
        //Creation of childs
        const cardImage = this.ownerDocument.createElement("img")
        cardImage.classList.add("cardImage")
        cardImage.setAttribute("src", `${this.properties.img}`)
        const title = this.ownerDocument.createElement("p")
        title.classList.add("categoriesCardText")
        title.innerHTML = `${this.properties.text}`
        //Childs of: cardContainer
        cardContainer.appendChild(cardImage)
        cardContainer.appendChild(title)
        //Childs of: this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(cardContainer)
    }
}

customElements.define("categories_section-cards", CategoriesSectionCard)

export default CategoriesSectionCard