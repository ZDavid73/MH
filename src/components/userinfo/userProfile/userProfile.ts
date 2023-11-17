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

            const menuContainer = (this.ownerDocument as Document).createElement("div");
            menuContainer.setAttribute("id", "menuUserProfile");
            (this.shadowRoot as ShadowRoot).appendChild(menuContainer);
    
            const title = (this.ownerDocument as Document).createElement("h1");
            title.innerHTML = "Nombre de usuario";
            menuContainer.appendChild(title);
    
            const subTitle = (this.ownerDocument as Document).createElement("h2");
            subTitle.innerHTML = "@nombre_de_usuario";
            menuContainer.appendChild(subTitle);
    
            const menuContainerimg = (this.ownerDocument as Document).createElement("div");
            menuContainerimg.setAttribute("id", "menuUserProfileimg");
            menuContainer.appendChild(menuContainerimg);
    
            const nameInput = (this.ownerDocument as Document).createElement("img");
            nameInput.setAttribute("src", "/src/resources/svg/Icons/User.svg");
            menuContainerimg.appendChild(nameInput);

        }
    }
}

customElements.define('user-profile', UserProfile);
