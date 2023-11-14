import "../../components/export"

export class PurchasePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link: HTMLLinkElement = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/pages/purchase/purchasePage.css");
            this.shadowRoot.appendChild(link);

            const mainContainer: HTMLElement = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "PurchasePage");
            this.shadowRoot.appendChild(mainContainer);

            const navBar: HTMLElement = this.ownerDocument.createElement("navbar-white");
            mainContainer.appendChild(navBar);

            const purchaseSummary: HTMLElement = this.ownerDocument.createElement('purchase-pagesummary');
            mainContainer.appendChild(purchaseSummary);

        }
    }
}

customElements.define('purchase-page', PurchasePage);
