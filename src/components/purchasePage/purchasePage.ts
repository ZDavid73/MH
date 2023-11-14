import '../export'
export class PurchasePageSummary extends HTMLElement {
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
            link.setAttribute("href", "/src/components/purchasePage/purchasePage.css");
            this.shadowRoot.appendChild(link);

            const mainContainer: HTMLElement = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "PurchasePagesummary");
            this.shadowRoot.appendChild(mainContainer);

            const payment: HTMLElement = this.ownerDocument.createElement('paymentpurchase-summary');
            mainContainer.appendChild(payment);

            const paymentmethod: HTMLElement = this.ownerDocument.createElement('select-paymentmethod');
            paymentmethod.classList.add('custom-payment-method'); // Agrega una clase para poder seleccionarla en CSS
            mainContainer.appendChild(paymentmethod);

        }
    }
}

customElements.define('purchase-pagesummary', PurchasePageSummary);
