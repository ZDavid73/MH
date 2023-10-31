export class loginregister extends HTMLElement {
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
            link.setAttribute("href", "./src/components/loginRe/loginRe.css");
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "MarketHubLogin");
            this.shadowRoot.appendChild(mainContainer);

            const navBarEmpty = this.ownerDocument.createElement('navbar-empty');
            mainContainer.appendChild(navBarEmpty);

            const title = this.ownerDocument.createElement("h1");
            title.textContent = "MarketHub";
            mainContainer.appendChild(title);

            const subTitle = this.ownerDocument.createElement("h2");
            subTitle.textContent = "Enter the market";
            mainContainer.appendChild(subTitle);

            const emailInput = this.ownerDocument.createElement("input");
            emailInput.setAttribute("type", "email");
            emailInput.setAttribute("placeholder", "Email");
            mainContainer.appendChild(emailInput);

            const passwordInput = this.ownerDocument.createElement("input");
            passwordInput.setAttribute("type", "password");
            passwordInput.setAttribute("placeholder", "Password");
            mainContainer.appendChild(passwordInput);

            const loginButton = this.ownerDocument.createElement("button");
            loginButton.textContent = "LOG IN";
            mainContainer.appendChild(loginButton);

            const forgotPasswordLink = this.ownerDocument.createElement("a");
            forgotPasswordLink.textContent = "Forgot your password?";
            forgotPasswordLink.setAttribute("href", "#");
            mainContainer.appendChild(forgotPasswordLink);

            const signUpLink = this.ownerDocument.createElement("a");
            signUpLink.textContent = "Don’t have account? Create one";
            signUpLink.setAttribute("href", "#");
            mainContainer.appendChild(signUpLink);
        }
    }
}

customElements.define("login-register", loginregister);
