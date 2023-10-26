import "../../export"
import { dataGeneral } from "../../../../data"

export class RecommendedSection extends HTMLElement {
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
        link.setAttribute("href", "/src/components/recommendedSection/recommendedSection.css")
        //Creation of father
        const recommendedContainer = this.ownerDocument.createElement("section")
        recommendedContainer.setAttribute("id", "recommendedContainer")
        //Creation of childs
        const title = this.ownerDocument.createElement("h2")
        title.innerHTML = "Recommended for you"
        const recommendedCardsContainer = this.ownerDocument.createElement("div")
        recommendedCardsContainer.classList.add("recommendedCardsContainer")
        //Append childs of recommendedContainer
        recommendedContainer.appendChild(title)
        recommendedContainer.appendChild(recommendedCardsContainer)
        dataGeneral.recommended.map( (element) => {
            const card = this.ownerDocument.createElement("recommended_section-card")
            card.setAttribute("img", `${element.img}`)
            card.setAttribute("title", `${element.title}`)
            card.setAttribute("price", `${element.price}`)
            card.setAttribute("description", `${element.description}`)
            recommendedCardsContainer.appendChild(card) 
        } )
        //Append childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(recommendedContainer)
    }
}

customElements.define("recommended-section", RecommendedSection)