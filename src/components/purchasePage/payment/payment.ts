import "../../export"

export class paymentPurchaseSummary extends HTMLElement {
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
            link.setAttribute("href", "/src/components/purchasePage/payment/payment.css")
            this.shadowRoot.appendChild(link)

            const summaryContainer = this.ownerDocument.createElement("div")
            summaryContainer.setAttribute("id", "summaryContainer")
            this.shadowRoot.appendChild(summaryContainer)

            const summaryTitle = this.ownerDocument.createElement("h2")
            summaryTitle.innerText = "Summary of purchase"
            summaryContainer.appendChild(summaryTitle)

            const detailsContainer = this.ownerDocument.createElement("div")
            detailsContainer.setAttribute("id", "detailsContainer")
            summaryContainer.appendChild(detailsContainer)

            const detailsLeft = this.ownerDocument.createElement("div")
            detailsLeft.setAttribute("id", "detailsLeft")
            detailsContainer.appendChild(detailsLeft)

            const productsCountTitle = this.ownerDocument.createElement("p")
            productsCountTitle.innerText = "Products"
            detailsLeft.appendChild(productsCountTitle)

            const shiptmentCountTitle = this.ownerDocument.createElement("p")
            shiptmentCountTitle.innerText = "Products"
            detailsLeft.appendChild(shiptmentCountTitle)

            const totalCountTitle = this.ownerDocument.createElement("h3")
            totalCountTitle.innerText = "Total"
            detailsLeft.appendChild(totalCountTitle)

            const detailsRight = this.ownerDocument.createElement("div")
            detailsRight.setAttribute("id", "detailsRight")
            detailsContainer.appendChild(detailsRight)

            const productsCountPrice = this.ownerDocument.createElement("p")
            productsCountPrice.innerText = "$76.923"
            detailsRight.appendChild(productsCountPrice)

            const shiptmentCountPrice = this.ownerDocument.createElement("p")
            shiptmentCountPrice.innerText = "$10.900"
            detailsRight.appendChild(shiptmentCountPrice)

            const totalCountPrice = this.ownerDocument.createElement("h3")
            totalCountPrice.innerText = "$87.823"
            detailsRight.appendChild(totalCountPrice)

        }

    }
}

customElements.define("paymentpurchase-summary", paymentPurchaseSummary)