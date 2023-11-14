import "../../../export";

const enum categoriesButtonProperties {
    text = "text"
}

export class categoriesButton extends HTMLElement {
    properties: Record<categoriesButtonProperties, string> = {
        text: ""
    }
    
    static get observedAttributes() {
        const properties: Record<categoriesButtonProperties, null> = {
            text: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: categoriesButtonProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case categoriesButtonProperties.text:
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
        link.setAttribute("href", "/src/components/mainPage/categoriesSection/categoriesButton/categoriesButton.css")
        this.shadowRoot?.appendChild(link)

        const sectionButton = this.ownerDocument.createElement("button")
        sectionButton.innerText = this.properties.text
        this.shadowRoot?.appendChild(sectionButton)
    }
}

customElements.define("categories-button", categoriesButton)