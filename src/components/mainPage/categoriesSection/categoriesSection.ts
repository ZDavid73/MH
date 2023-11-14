import "../../export"

export class CategoriesSection extends HTMLElement {
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
        link.setAttribute("href", "/src/components/mainPage/categoriesSection/categoriesSection.css")
        this.shadowRoot?.appendChild(link)

        const sectionsContainer = this.ownerDocument.createElement("div")
        sectionsContainer.setAttribute("id", "sectionsContainer")
        this.shadowRoot?.appendChild(sectionsContainer)

        const furnitureButton = this.ownerDocument.createElement("categories-button")
        furnitureButton.setAttribute("text", "Furniture")
        sectionsContainer.appendChild(furnitureButton)

        const plantsButton = this.ownerDocument.createElement("categories-button")
        plantsButton.setAttribute("text", "Plants")
        sectionsContainer.appendChild(plantsButton)

        const foodButton = this.ownerDocument.createElement("categories-button")
        foodButton.setAttribute("text", "Food")
        sectionsContainer.appendChild(foodButton)

        const kidsButton = this.ownerDocument.createElement("categories-button")
        kidsButton.setAttribute("text", "Kids")
        sectionsContainer.appendChild(kidsButton)

        const booksButton = this.ownerDocument.createElement("categories-button")
        booksButton.setAttribute("text", "Books")
        sectionsContainer.appendChild(booksButton)

    }
}

customElements.define("categories-section", CategoriesSection)