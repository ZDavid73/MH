import "../../export";

const enum CustomInputProperties {
    icon = "icon",
    placeholder = "placeholder"
}

export class CustomInput extends HTMLElement {
    properties: Record<CustomInputProperties, string> = {
        icon: "",
        placeholder: ""
    }
    
    static get observedAttributes() {
        const properties: Record<CustomInputProperties, null> = {
            icon: null,
            placeholder: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: CustomInputProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case CustomInputProperties.icon:
                this.properties.icon = newValue
                break;
            case CustomInputProperties.placeholder:
                this.properties.placeholder = newValue
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
        link.setAttribute("href", "/src/components/loginRe/input/input.css")
        this.shadowRoot?.appendChild(link)

        const inputContainer = this.ownerDocument.createElement("div")
        inputContainer.classList.add("input-container")
        this.shadowRoot?.appendChild(inputContainer)

        const icon = this.ownerDocument.createElement("img")
        icon.setAttribute("src", `${this.properties.icon}`)
        inputContainer.appendChild(icon)

        const input = this.ownerDocument.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", `${this.properties.placeholder}`)
        inputContainer.appendChild(input)
    }
}

customElements.define("custom-input", CustomInput)