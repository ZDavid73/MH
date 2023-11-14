 import '../../export'
 
export class UserData extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/userinfo/userData/userData.css");
            this.shadowRoot.appendChild(link);

            const container = this.ownerDocument.createElement('div');
            container.setAttribute('class', 'user-data');

            const email = this.ownerDocument.createElement('p');
            email.textContent = 'Email: ejemplo@correo.com';
            container.appendChild(email);

            const phone = this.ownerDocument.createElement('p');
            phone.textContent = 'Celular: 123456789';
            container.appendChild(phone);

            const userId = this.ownerDocument.createElement('p');
            userId.textContent = 'ID: ' + Math.floor(Math.random() * 10000); // ID aleatorio
            container.appendChild(userId);

            this.shadowRoot.appendChild(container);
        }
    }
}

customElements.define('user-data', UserData);
