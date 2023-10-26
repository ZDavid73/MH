import "../../export"

export class AdvertisingSection extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/advertisingSection/advertisingSection.css")
        //Creation of father
        const advertisingSectionContainer = this.ownerDocument.createElement("section")
        advertisingSectionContainer.setAttribute("id", "advertisingSectionContainer")
        //Creation of childs
        const ad1 = this.ownerDocument.createElement("advertising_section-ad")
        ad1.setAttribute("img", "/src/resources/jpg/advertising1.jpg")
        const ad2 = this.ownerDocument.createElement("advertising_section-ad")
        ad2.setAttribute("img", "/src/resources/jpg/advertising1.jpg")
        //Append childs of advertisingSectionContainer
        advertisingSectionContainer.appendChild(ad1)
        advertisingSectionContainer.appendChild(ad2)
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(advertisingSectionContainer)
    }
}

customElements.define("advertising-section", AdvertisingSection)