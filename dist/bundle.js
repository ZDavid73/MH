(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navSearchBar/navSearchBar.css");const s=this.ownerDocument.createElement("div");s.setAttribute("id","navSearchBar");const o=this.ownerDocument.createElement("img");o.setAttribute("id","navSearchLogo"),o.setAttribute("src","/src/resources/svg/search_icon.svg");const r=this.ownerDocument.createElement("input");r.setAttribute("placeholder","Find what you want!"),s.appendChild(o),s.appendChild(r),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s)}}customElements.define("nav-searchbar",e);class t extends HTMLElement{static get observedAttributes(){return Object.keys({icon:null})}constructor(){super(),this.properties={icon:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){"icon"===e&&(this.properties.icon=n)}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navIconButton/navIconButton.css");const s=this.ownerDocument.createElement("div"),o=this.ownerDocument.createElement("img");o.setAttribute("src",`${this.properties.icon}`),s.appendChild(o),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s),console.log(s)}}customElements.define("nav-iconbutton",t);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navBar.css");const s=this.ownerDocument.createElement("nav");s.setAttribute("id","navBar");const o=this.ownerDocument.createElement("img");o.setAttribute("src","/src/resources/svg/logo_dark_v.svg"),o.setAttribute("id","logoNav");const r=this.ownerDocument.createElement("nav-searchbar"),c=this.ownerDocument.createElement("nav-iconbutton");c.setAttribute("icon","/src/resources/svg/chat_icon.svg");const i=this.ownerDocument.createElement("nav-iconbutton");i.setAttribute("icon","/src/resources/svg/userProfile_logo.svg");const a=this.ownerDocument.createElement("nav-iconbutton");a.setAttribute("icon","/src/resources/svg/upload_icon.svg");const l=this.ownerDocument.createElement("nav-iconbutton");l.setAttribute("icon","/src/resources/svg/shoopingCart_icon.svg");const h=this.ownerDocument.createElement("nav-iconbutton");h.setAttribute("icon","/src/resources/svg/options_icon.svg");const d=this.ownerDocument.createElement("div");d.classList.add("horizontalSpace"),s.appendChild(o),s.appendChild(r),s.appendChild(d),s.appendChild(c),s.appendChild(i),s.appendChild(a),s.appendChild(l),s.appendChild(h),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s)}}customElements.define("nav-bar",n);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(null!=this.shadowRoot||null!=this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/appContainer.css");const t=this.ownerDocument.createElement("nav-bar");this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(t)}}}customElements.define("app-container",s)})();