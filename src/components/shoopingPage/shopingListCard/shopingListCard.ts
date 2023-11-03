import "../../export";

const enum ShopingListCardProperties {
    image = "image",
    title = "title",
    count = "count",
    price = "price"
}

export class ShopingListCard extends HTMLElement {
    properties: Record<ShopingListCardProperties, string> = {
        image: "",
        title: "",
        count: "",
        price: ""
    }

    static get observedAttributes() {
        const properties: Record<ShopingListCardProperties, null> = {
            image: null,
            title: null,
            count: null,
            price: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: ShopingListCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case ShopingListCardProperties.image:
                this.properties.image = newValue
                break;
            case ShopingListCardProperties.count:
                this.properties.count = newValue
                break;
            case ShopingListCardProperties.price:
                this.properties.price = newValue
                break;
            case ShopingListCardProperties.title:
                this.properties.title = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/shoopingPage/shopingListCard/shopingListCard.css")
            this.shadowRoot?.appendChild(link)

            const cardContainer = this.ownerDocument.createElement("div")
            cardContainer.classList.add("cardContainer")
            this.shadowRoot.appendChild(cardContainer)

            const image = this.ownerDocument.createElement("div")
            image.classList.add("cardImage")
            image.style.backgroundImage = "url(/src/resources/jpg/platesRecommended.jpg)"
            cardContainer.appendChild(image)

            const cardTextContainer = this.ownerDocument.createElement("div")
            cardTextContainer.classList.add("cardTextContainer")
            cardContainer.appendChild(cardTextContainer)

            const title = this.ownerDocument.createElement("h2")
            title.innerText = "Cookie dough chocolate chips corona 250g"
            cardTextContainer.appendChild(title)

            const count = this.ownerDocument.createElement("h3")
            count.innerText = "Count 12"
            cardTextContainer.appendChild(count)

            const price = this.ownerDocument.createElement("h3")
            price.innerText = "COP $23.500"
            cardTextContainer.appendChild(price)

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.classList.add("buttonContainer")
            cardTextContainer.appendChild(buttonContainer)

            const deleteButton = this.ownerDocument.createElement("p")
            deleteButton.innerHTML = "DELETE"
            buttonContainer.appendChild(deleteButton)
        }

    }
}

customElements.define("shopinglist-card", ShopingListCard)