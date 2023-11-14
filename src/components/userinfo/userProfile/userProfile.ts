import "../../export"

export class UserProfile extends HTMLElement {
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
            link.setAttribute("href", "/src/components/userinfo/userProfile/userProfile.css")
            this.shadowRoot.appendChild(link);

            const menuContainer = this.ownerDocument.createElement("div");
            menuContainer.setAttribute("id", "menuUserProfile");
            this.shadowRoot.appendChild(menuContainer);

            const title = this.ownerDocument.createElement("h1");
            title.innerHTML = "Nombre de usuario";
            menuContainer.appendChild(title);

            const subTitle = this.ownerDocument.createElement("h2");
            subTitle.innerHTML = "@nombre_de_usuario";
            menuContainer.appendChild(subTitle);

            const menuContainerimg = this.ownerDocument.createElement("div");
            menuContainer.setAttribute("id", "menuUserProfileimg");
            this.shadowRoot.appendChild(menuContainer);

            const nameInput = this.ownerDocument.createElement("img");
            nameInput.setAttribute("img", "/src/resources/svg/Icons/User.svg");
            menuContainerimg.appendChild(nameInput);

        }
    }
}

customElements.define('user-profile', UserProfile);
