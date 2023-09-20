const enum componentProperties {
    icon = "icon"
}

class component extends HTMLElement {
    properties: Record<componentProperties, string> = {
        icon: ""
    }
    
    static get observedAttributes() {
        const properties: Record<componentProperties, null> = {
            icon: null,
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: string, oldValue: string, newValue: string) {
        switch (propName) {
            case componentProperties.icon:
                this.properties.icon = newValue
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
        link.setAttribute("href", "")
        //Creation of father

        //Creation of childs

        //Append childs of cardContainer

        //Append childs of this.shadowRoot
    }
}

customElements.define("component-name", component)

export default component