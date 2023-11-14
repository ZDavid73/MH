import "../../export"

export class salesSection extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/mainPage/salesSection/salesSection.css")
            this.shadowRoot.appendChild(link)

            const salesSectionContainer = this.ownerDocument.createElement("section")
            salesSectionContainer.setAttribute("id", "salesSectionContainer")
            this.shadowRoot.appendChild(salesSectionContainer)

            const saleCardPhones = this.ownerDocument.createElement("sales-card")
            saleCardPhones.setAttribute("image", "/src/resources/jpg/sales/ofertaCelulares.jpg")
            saleCardPhones.setAttribute("text", "50% off")
            saleCardPhones.setAttribute("sub_text", "Phones and Accessories")
            salesSectionContainer.appendChild(saleCardPhones)

            const saleCardFurniture = this.ownerDocument.createElement("sales-card")
            saleCardFurniture.setAttribute("image", "/src/resources/jpg/sales/ofertaMuebles.jpg")
            saleCardFurniture.setAttribute("text", "60% off")
            saleCardFurniture.setAttribute("sub_text", "Home and Furniture")
            salesSectionContainer.appendChild(saleCardFurniture)

            const saleCardTV = this.ownerDocument.createElement("sales-card")
            saleCardTV.setAttribute("image", "/src/resources/jpg/sales/ofertaTelevisores.jpg")
            saleCardTV.setAttribute("text", "50% off")
            saleCardTV.setAttribute("sub_text", "TV and Audio")
            salesSectionContainer.appendChild(saleCardTV)
        }

    }
}

customElements.define("sales-section", salesSection)