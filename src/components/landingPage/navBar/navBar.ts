export default class navBarlanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot){

        this.shadowRoot.innerHTML = `
      
            <div id="nav-bar">
                <img src="logo.png" alt="logo" /> 
                <button id="sign-up">sign-up</button>
                <button id="login">login</button>
            </div>
        `;
    }
}
}

customElements.define('nav-barlanding', navBarlanding);
//logo de la marca//