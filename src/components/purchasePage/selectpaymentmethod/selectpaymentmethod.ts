import '../../export';

export class SelectPaymentMethod extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/purchasePage/selectpaymentmethod/selectpaymentmethod.css");
            this.shadowRoot.appendChild(link);

            const h1 = document.createElement('h1');
            h1.textContent = "Payment";
            this.shadowRoot.appendChild(h1);

            const h2 = document.createElement('h2');
            h2.textContent = "Select payment method";
            this.shadowRoot.appendChild(h2);

            const select = document.createElement('select');
            const defaultOption = document.createElement('option');
            defaultOption.textContent = "Payment type...";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            select.appendChild(defaultOption);
            this.shadowRoot.appendChild(select);

            const p = document.createElement('p');
            p.textContent = "You are going to pay ";
            const spanPrice = document.createElement('span');
            spanPrice.className = 'price';
            spanPrice.textContent = "$87.823";
            p.appendChild(spanPrice);
            const textNode = document.createTextNode(" with your visa card that ends with 2345");
            p.appendChild(textNode);
            this.shadowRoot.appendChild(p);

            const button = document.createElement('button');
            button.textContent = "Accept";
            this.shadowRoot.appendChild(button);
        }
    }
}

customElements.define('select-paymentmethod', SelectPaymentMethod);
