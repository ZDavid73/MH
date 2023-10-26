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
        const cleaningCard = this.ownerDocument.createElement("categories_section-cards")
        cleaningCard.setAttribute("img", "https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg?h=600&iar=0&w=640&rev=2bd4d26e45c54499acab7a4007dbb210&hash=DF30C911968BFFF87F68DCC47D2B169A")
        cleaningCard.setAttribute("text", "CLEANING")
        const bakeryCard = this.ownerDocument.createElement("categories_section-cards")
        bakeryCard.setAttribute("img", "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=2000")
        bakeryCard.setAttribute("text", "BAKERY")
        const candiesCard = this.ownerDocument.createElement("categories_section-cards")
        candiesCard.setAttribute("img", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/10/05/fn_sour-candy-ranked-getty_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1664993358924.jpeg")
        candiesCard.setAttribute("text", "CANDIES")
        const snacksCard = this.ownerDocument.createElement("categories_section-cards")
        snacksCard.setAttribute("img", "https://blog.natruly.com/wp-content/uploads/2021/04/002-min.jpeg")
        snacksCard.setAttribute("text", "SNACKS")
        const liqueurCard = this.ownerDocument.createElement("categories_section-cards")
        liqueurCard.setAttribute("img", "https://www.a1wineandspirit.com/media/ygbpcrvv/liqueur-large.jpg?width=568&height=378")
        liqueurCard.setAttribute("text", "LIQUEUR")
        
        //childs of: categoriesCardsContainer
        categoriesCardsContainer.appendChild(foodCard)
        categoriesCardsContainer.appendChild(sportsCard)
        categoriesCardsContainer.appendChild(kidsCard)
        categoriesCardsContainer.appendChild(campingCard)
        categoriesCardsContainer.appendChild(cleaningCard)
        categoriesCardsContainer.appendChild(bakeryCard)
        categoriesCardsContainer.appendChild(candiesCard)
        categoriesCardsContainer.appendChild(snacksCard)
        categoriesCardsContainer.appendChild(liqueurCard)
        //childs of: categoriesContainer
        categoriesContainer.appendChild(title)
        categoriesContainer.appendChild(categoriesCardsContainer)
        //childs of: this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(categoriesContainer)

    }
}

customElements.define("categories-section", CategoriesSection)