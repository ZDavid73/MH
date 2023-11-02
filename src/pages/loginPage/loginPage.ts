import "../../components/export";

export class loginPage extends HTMLElement {
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
            link.setAttribute("href", "/src/pages/loginPage/loginPage.css");
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "LoginPage");
            this.shadowRoot.appendChild(mainContainer);

            const navBarEmpty = this.ownerDocument.createElement('navbar-empty');
            const loginregister = this.ownerDocument.createElement('login-register');

            mainContainer.appendChild(navBarEmpty);
            mainContainer.appendChild(loginregister);




           }
        }
    }

customElements.define("login-page", loginPage);