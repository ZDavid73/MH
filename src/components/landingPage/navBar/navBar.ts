export default class NavBarLanding extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element.
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Verifica si shadowRoot está disponible
        if (this.shadowRoot) {
            // Crear un elemento link para referenciar el archivo CSS
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/landingPage/navBar/navBar.css");

            // Establecer el contenido interno del shadowRoot
            this.shadowRoot.innerHTML = `
                <div id="navbar">
                    <img src="/src/resources/svg/logo_dark_v.svg" alt="logoNav" /> 
                    <div class="button-container">
                    <button id="sign-up">sign-up</button>
                    <button id="login">login</button>
                    <div/>
                </div>
            `;

            // Agregar el elemento link al shadowRoot
            this.shadowRoot.appendChild(link);
        }
    }
}

// Definir el nuevo custom element
customElements.define('nav-barlanding', NavBarLanding);
