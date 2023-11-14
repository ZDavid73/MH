import "./searchOption/searchOption"

export class optionsInformation extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/searchPage/optionsInformation/optionsInformation.css")
        //Creation of main component
        const optionsInformationContainer = this.ownerDocument.createElement("div")
        optionsInformationContainer.setAttribute("id", "optionsInformationContainer")
        //Creation of optionsInformationContainer elements
        const informationTitle = this.ownerDocument.createElement("h3")
        informationTitle.innerHTML = "Search options"
        const option1 = this.ownerDocument.createElement("search--option")
        option1.setAttribute("title", "Price")
        option1.setAttribute("desc", "No option selected")
        option1.setAttribute("opt_default", "No option selected")
        option1.setAttribute("opt1", "From cheap to expensive")
        option1.setAttribute("opt2", "From expensive to cheap")

        
        //Adding childs of optionsInformacionContainer
        optionsInformationContainer.appendChild(informationTitle)
        optionsInformationContainer.appendChild(option1)
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(optionsInformationContainer)
    }
}

customElements.define("options-information", optionsInformation)