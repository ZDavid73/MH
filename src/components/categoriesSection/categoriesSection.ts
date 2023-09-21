import "./categoriesSectionCard/categoriesSectionCard"

class CategoriesSection extends HTMLElement {
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
        link.setAttribute("href", "/src/components/categoriesSection/categoriesSection.css")
        //Creation of father
        const categoriesContainer =  this.ownerDocument.createElement("div")
        categoriesContainer.setAttribute("id", "categoriesContainer")
        //Creation of father childs and childs of childs
        const title = this.ownerDocument.createElement("h2")
        title.innerHTML = "Categories"
        const categoriesCardsContainer = this.ownerDocument.createElement("div")
        categoriesCardsContainer.classList.add("cardsContainer")
        const foodCard = this.ownerDocument.createElement("categories_section-cards")
        foodCard.setAttribute("img", "/src/resources/jpg/categoriesFood.jpg")
        foodCard.setAttribute("text", "FOOD")
        const sportsCard = this.ownerDocument.createElement("categories_section-cards")
        sportsCard.setAttribute("img", "/src/resources/jpg/categoriesSport.jpg")
        sportsCard.setAttribute("text", "SPORTS")
        const kidsCard = this.ownerDocument.createElement("categories_section-cards")
        kidsCard.setAttribute("img", "/src/resources/jpg/categoriesKids.jpg")
        kidsCard.setAttribute("text", "KIDS")
        const campingCard = this.ownerDocument.createElement("categories_section-cards")
        campingCard.setAttribute("img", "/src/resources/jpg/categoriesCamping.jpg")
        campingCard.setAttribute("text", "CAMPING")
        //childs of: categoriesCardsContainer
        categoriesCardsContainer.appendChild(foodCard)
        categoriesCardsContainer.appendChild(sportsCard)
        categoriesCardsContainer.appendChild(kidsCard)
        categoriesCardsContainer.appendChild(campingCard)
        //childs of: categoriesContainer
        categoriesContainer.appendChild(title)
        categoriesContainer.appendChild(categoriesCardsContainer)
        //childs of: this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(categoriesContainer)

    }
}

customElements.define("categories-section", CategoriesSection)

export default CategoriesSection