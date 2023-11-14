import "../../components/export";

export class UserPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/pages/userPage/userPage.css")
            this.shadowRoot.appendChild(link);

            const mainContainer: HTMLElement = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "UserPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBar: HTMLElement = this.ownerDocument.createElement("navbar-white");
            mainContainer.appendChild(navBar);

            const userProfile: HTMLElement = this.ownerDocument.createElement('user-profile');
            mainContainer.appendChild(userProfile);

            const userData: HTMLElement = this.ownerDocument.createElement('user-data');
            mainContainer.appendChild(userData);

            const changeDataButton: HTMLButtonElement = this.ownerDocument.createElement('button');
            changeDataButton.textContent = 'Change your data';
            mainContainer.appendChild(changeDataButton);
        }
    }
}

customElements.define('user-page', UserPage);
