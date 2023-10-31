export default class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const styleLink = this.ownerDocument.createElement("link");
            styleLink.setAttribute("rel", "stylesheet");
            styleLink.setAttribute("href", "/src/components/customInput/customInput.css");
            this.shadowRoot.appendChild(styleLink);

            const container = this.ownerDocument.createElement("div");
            container.classList.add("input-container");

            const input = this.ownerDocument.createElement("input");
            input.setAttribute("type", this.getAttribute("type") || "text");
            input.setAttribute("placeholder", this.getAttribute("placeholder") || "");
            container.appendChild(input);

            const image = this.ownerDocument.createElement("img");
            image.setAttribute("src", this.getAttribute("image") || "");
            container.appendChild(image);

            this.shadowRoot.appendChild(container);
        }
    }
}

customElements.define("custom-input", CustomInput);
