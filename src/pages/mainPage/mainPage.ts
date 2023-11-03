import "../../components/export"

export class MainPage extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/mainPage/mainPage.css")
            this.shadowRoot.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "mainPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBar = this.ownerDocument.createElement("navbar-red")
            mainContainer.appendChild(navBar)

            const categoriesSection = this.ownerDocument.createElement("categories-section")
            mainContainer.appendChild(categoriesSection)

            const newsSection = this.ownerDocument.createElement("news-section")
            mainContainer.appendChild(newsSection)

            // const recommendedSection = this.ownerDocument.createElement("recommended-section")
            // mainContainer.appendChild(recommendedSection)
        }

    }
}

customElements.define("main-page", MainPage)