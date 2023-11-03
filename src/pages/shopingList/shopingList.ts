import "../../components/export"
import { dataGeneral } from "../../../data"
import { state } from "../../store"

export class ShopingList extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/shopingList/shopingList.css")
            this.shadowRoot.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "shopingList")
            this.shadowRoot.appendChild(mainContainer)

            const navBar = this.ownerDocument.createElement("navbar-red")
            mainContainer.appendChild(navBar)

            const shoopingList = this.ownerDocument.createElement("div")
            shoopingList.setAttribute("id", "shoopingListSubContaainer")
            mainContainer.appendChild(shoopingList)

            const shoopingListCardContainer = this.ownerDocument.createElement("div")
            shoopingListCardContainer.setAttribute("id", "shoopingListCardContainer")
            shoopingList.appendChild(shoopingListCardContainer)

            const cardsListTitle = this.ownerDocument.createElement("div")
            cardsListTitle.setAttribute("id", "cardsListTitle")
            shoopingListCardContainer.appendChild(cardsListTitle)

            const cardsListTitleText = this.ownerDocument.createElement("h1")
            cardsListTitleText.innerText = "Shopping List"
            cardsListTitle.appendChild(cardsListTitleText)
            
            const card = this.ownerDocument.createElement("shopinglist-card")
            shoopingListCardContainer.appendChild(card)

            const q = this.ownerDocument.createElement("shopinglist-card")
            shoopingListCardContainer.appendChild(q)

            const w = this.ownerDocument.createElement("shopinglist-card")
            shoopingListCardContainer.appendChild(w)

            const r = this.ownerDocument.createElement("shopinglist-card")
            shoopingListCardContainer.appendChild(r)
            
            const shoopingListSummary = this.ownerDocument.createElement("div")
            shoopingListSummary.setAttribute("id", "shoopingListSummary")
            shoopingList.appendChild(shoopingListSummary)
        }

    }
}

customElements.define("shoping-list", ShopingList)