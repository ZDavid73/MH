import { dispatch } from "../../store";
import { changeScreen } from "../../store/actions";
import { Screens } from "../../types/screens";
import "../export";

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

            const centralBox = this.ownerDocument.createElement("div");
            centralBox.classList.add("central-box");
            // Append centralBox to mainContainer
            mainContainer.appendChild(centralBox);

            const title = this.ownerDocument.createElement("h1");
            title.textContent = "MarketHub";
            centralBox.appendChild(title);

            const subTitle = this.ownerDocument.createElement("h2");
            subTitle.textContent = "Enter the market";
            centralBox.appendChild(subTitle);

            const emailInput = this.ownerDocument.createElement('signup-input');
            emailInput.setAttribute('placeholder', 'Email');
            emailInput.setAttribute('icon', '/src/resources/svg/Icons/Email.svg');
            centralBox.appendChild(emailInput);

            const passwordInput = this.ownerDocument.createElement('signup-input');
            passwordInput.setAttribute('placeholder', 'Password');
            passwordInput.setAttribute('icon', '/src/resources/svg/Icons/Lock.svg');
            centralBox.appendChild(passwordInput);


            const loginButton = this.ownerDocument.createElement("button");
            loginButton.textContent = "LOG IN";
            centralBox.appendChild(loginButton);

            const forgotPasswordLink = this.ownerDocument.createElement("a");
            forgotPasswordLink.textContent = "Forgot your password?";
            forgotPasswordLink.setAttribute("href", "#");
            forgotPasswordLink.classList.add("forgot-password"); // Assign class for styling
            centralBox.appendChild(forgotPasswordLink);

            const signUpLink = this.ownerDocument.createElement("a");
            signUpLink.classList.add("sign-up-link");
            signUpLink.textContent = "Don’t have an account? Create one";
            signUpLink.setAttribute("href", "#");
            mainContainer.appendChild(signUpLink);

            loginButton.addEventListener("click", () => {
                dispatch(
                    changeScreen(Screens.mainPage)
                )
            })
        }
    }
}

customElements.define("login-register", loginregister);
