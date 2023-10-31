import "../../components/export";

export class LoginPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "./src/pages/loginPage/loginPage.css");
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "LoginPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarEmpty = this.ownerDocument.createElement('navbar-empty');
            mainContainer.appendChild(navBarEmpty);

            const loginregister = this.ownerDocument.createElement('login-register');
            mainContainer.appendChild(loginregister);

           }
        }
    }

customElements.define("login-page", LoginPage);
