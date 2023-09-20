const enum advertisingSectionAdProperties {
    img = "img"
}

class advertisingSectionAd extends HTMLElement {
    properties: Record<advertisingSectionAdProperties, string> = {
        img: ""
    }
    
    static get observedAttributes() {
        const properties: Record<advertisingSectionAdProperties, null> = {
            img: null,
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: string, oldValue: string, newValue: string) {
        switch (propName) {
            case advertisingSectionAdProperties.img:
                this.properties.img = newValue
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
        link.setAttribute("href", "/src/components/advertisingSection/advertisingSectionAd/advertisingSectionAd.css")
        //Creation of fathers
        const adContainer = this.ownerDocument.createElement("div")
        adContainer.classList.add("adContainer")
        //Creation of childs
        const adImage = this.ownerDocument.createElement("img")
        adImage.setAttribute("src", `${this.properties.img}`)
        //Append childs of adContainer
        adContainer.appendChild(adImage)
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(adContainer)
    }
}

customElements.define("advertising_section-ad", advertisingSectionAd)

export default advertisingSectionAd