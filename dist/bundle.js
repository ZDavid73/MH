(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(null!=this.shadowRoot||null!=this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/appContainer.css");const t=this.ownerDocument.createElement("nav-bar"),o=this.ownerDocument.createElement("categories-section"),n=this.ownerDocument.createElement("advertising-section"),s=this.ownerDocument.createElement("recommended-section");this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(o),this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(s)}}}customElements.define("app-container",e)})();