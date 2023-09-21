const enum NavIconButtonProperties {
    icon = "icon"
}

class NavIconButton extends HTMLElement {
    properties: Record<NavIconButtonProperties, string> = {
        icon: ""
    }
    
    static get observedAttributes() {
        const properties: Record<NavIconButtonProperties,null> = {
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
            case NavIconButtonProperties.icon:
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
        link.setAttribute("href", "/src/components/navBar/navIconButton/navIconButton.css")

        const iconContainer = this.ownerDocument.createElement("div")
        const icon = this.ownerDocument.createElement("img")
        icon.setAttribute("src", `${this.properties.icon}`)

        iconContainer.appendChild(icon)


        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(iconContainer)
    }
}

customElements.define("nav-iconbutton", NavIconButton)

export default NavIconButton