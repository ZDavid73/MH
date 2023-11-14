import "../../export"

export class newsSection extends HTMLElement {
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
            link.setAttribute("href", "/src/components/mainPage/newSection/newSection.css")
            this.shadowRoot.appendChild(link)

            const newsSectionContaier = this.ownerDocument.createElement("section")
            newsSectionContaier.setAttribute("id", "newsSectionContaier")
            this.shadowRoot.appendChild(newsSectionContaier)

            const textContainer = this.ownerDocument.createElement("div")
            textContainer.setAttribute("id", "newsSection_textContainer")
            newsSectionContaier.appendChild(textContainer)

            const title = this.ownerDocument.createElement("h1")
            title.innerText = "New living rooms sets for you!"
            textContainer.appendChild(title)

        }

    }
}

customElements.define("news-section", newsSection)