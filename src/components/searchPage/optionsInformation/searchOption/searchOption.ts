const enum SearchOptionProperties {
    title = "title",
    desc = "desc",
    opt_default = "opt_default",
    opt1 = "opt1",
    opt2 = "opt2"
}

export class SearchOption extends HTMLElement {
    properties: Record<SearchOptionProperties, string> = {
        title: "",
        desc: "",
        opt_default: "",
        opt1: "",
        opt2: ""

    }
    
    static get observedAttributes() {
        const properties: Record<SearchOptionProperties, null> = {
            title: null,
            desc: null,
            opt_default: null,
            opt1: null,
            opt2: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: SearchOptionProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case SearchOptionProperties.title:
                this.properties.title = newValue
                break;
            case SearchOptionProperties.desc:
                this.properties.desc = newValue
                break;
            case SearchOptionProperties.opt_default:
                this.properties.opt_default = newValue
                break;
            case SearchOptionProperties.opt1:
                this.properties.opt1 = newValue
                break;
            case SearchOptionProperties.opt2:
                this.properties.opt2 = newValue
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
        link.setAttribute("href", "/src/components/searchPage/optionsInformation/searchOption/searchOption.css")
        //Creation of main container
        const optionContainer = this.ownerDocument.createElement("div")
        optionContainer.classList.add("optionContainer")
        //Creation of optionsContainer elements
        const optionTitle = this.ownerDocument.createElement("p")
        optionTitle.setAttribute("id", "optionTitle")
        optionTitle.innerHTML = `${this.properties.title}`
        const optionSelectorContainer = this.ownerDocument.createElement("div")
        optionSelectorContainer.setAttribute("id", "optionSelectorContainer")
        //Creation of optionsInformaationContainer elements
        const selector = this.ownerDocument.createElement("select")
        //Creation of selec elements
        const opt1 = this.ownerDocument.createElement("option")
        opt1.innerHTML = `${this.properties.opt_default}`
        const opt2 = this.ownerDocument.createElement("option")
        opt2.innerHTML = `${this.properties.opt1}`
        const opt3 = this.ownerDocument.createElement("option")
        opt3.innerHTML = `${this.properties.opt2}`
        //Adding childs of selector
        selector.appendChild(opt1)
        selector.appendChild(opt2)
        selector.appendChild(opt3)
        //Addinf childs of optionsSelectorContainer
        optionSelectorContainer.appendChild(selector)
        //Adding childs of optionsInformacionContainer
        optionContainer.append(optionTitle)
        optionContainer.appendChild(optionSelectorContainer)
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(optionContainer)
    }
}

customElements.define("search--option", SearchOption)