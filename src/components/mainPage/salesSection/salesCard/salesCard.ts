const enum SalesCardProperties {
    image = "image",
    text = "text",
    sub_text = "sub_text"
}

export class SalesCard extends HTMLElement {
    properties: Record<SalesCardProperties, string> = {
        image: "",
        text: "",
        sub_text: ""
    }

    static get observedAttributes() {
        const properties: Record<SalesCardProperties, null> = {
            image: null,
            text: null,
            sub_text: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: SalesCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case SalesCardProperties.image:
                this.properties.image = newValue
                break;
            case SalesCardProperties.text:
                this.properties.text = newValue
                break;
            case SalesCardProperties.sub_text:
                this.properties.sub_text = newValue
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
        link.setAttribute("href", "/src/components/mainPage/salesSection/salesCard/salesCard.css")
        this.shadowRoot?.appendChild(link)

        const saleCardContainer = this.ownerDocument.createElement("div")
        saleCardContainer.classList.add("saleCard")
        saleCardContainer.style.backgroundImage = `url(${this.properties.image})`
        this.shadowRoot?.appendChild(saleCardContainer)

        const subTitleContainer = this.ownerDocument.createElement("div")
        subTitleContainer.classList.add("subTitleContainer")
        saleCardContainer.appendChild(subTitleContainer)

        const subTitleText = this.ownerDocument.createElement("h3")
        subTitleText.innerText = `${this.properties.sub_text}`
        subTitleContainer.appendChild(subTitleText)

    }
}

customElements.define("sales-card", SalesCard)