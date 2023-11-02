import "../export"

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
            link.setAttribute("href", "/src/components/loginRe/loginRe.css");
            this.shadowRoot.appendChild(link);

            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "MarketHubLogin");
            this.shadowRoot.appendChild(mainContainer);

            const title = this.ownerDocument.createElement("h1");
            title.textContent = "MarketHub";
            mainContainer.appendChild(title);

            const subTitle = this.ownerDocument.createElement("h2");
            subTitle.textContent = "Enter the market";
            mainContainer.appendChild(subTitle);

            const emailInput = this.ownerDocument.createElement('custom-input');
            emailInput.setAttribute('type', 'email');
            emailInput.setAttribute('placeholder', 'Email');
            emailInput.setAttribute('image', './src/resources/jpg/mail_FILL1_wght400_GRAD0_opsz48 1.png');
            mainContainer.appendChild(emailInput);

            const passwordInput = this.ownerDocument.createElement('custom-input');
            passwordInput.setAttribute('type', 'password');
            passwordInput.setAttribute('placeholder', 'Password');
            passwordInput.setAttribute('image', './src/resources/jpg/lock_FILL1_wght400_GRAD0_opsz48 1.png');
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
