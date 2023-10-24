(()=>{"use strict";const e=window.location.search;console.log(e);const t=new URLSearchParams(e);console.log(t.get("search"));class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.mount()}mount(){var e,t;this.render();const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input"),o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("navSearchLogo");null==n||n.addEventListener("input",(()=>{null==o||o.addEventListener("click",(()=>{window.location.href=`/src/pages/search?search=${null==n?void 0:n.value}`}))}))}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navSearchBar/navSearchBar.css");const o=this.ownerDocument.createElement("div");o.setAttribute("id","navSearchBar");const s=this.ownerDocument.createElement("img");s.setAttribute("id","navSearchLogo"),s.setAttribute("src","/src/resources/svg/search_icon.svg");const i=this.ownerDocument.createElement("input");i.setAttribute("id","searchInputNav"),i.setAttribute("placeholder","Find what you want!"),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("nav-searchbar",n);class o extends HTMLElement{static get observedAttributes(){return Object.keys({icon:null})}constructor(){super(),this.properties={icon:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){"icon"===e&&(this.properties.icon=n)}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navIconButton/navIconButton.css");const o=this.ownerDocument.createElement("div"),s=this.ownerDocument.createElement("img");s.setAttribute("src",`${this.properties.icon}`),o.appendChild(s),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("nav-iconbutton",o);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/navBar/navBar.css");const o=this.ownerDocument.createElement("nav");o.setAttribute("id","navBar");const s=this.ownerDocument.createElement("img");s.setAttribute("src","/src/resources/svg/logo_dark_v.svg"),s.setAttribute("id","logoNav");const i=this.ownerDocument.createElement("nav-searchbar"),r=this.ownerDocument.createElement("nav-iconbutton");r.setAttribute("icon","/src/resources/svg/chat_icon.svg");const c=this.ownerDocument.createElement("nav-iconbutton");c.setAttribute("icon","/src/resources/svg/userProfile_logo.svg");const a=this.ownerDocument.createElement("nav-iconbutton");a.setAttribute("icon","/src/resources/svg/upload_icon.svg");const d=this.ownerDocument.createElement("nav-iconbutton");d.setAttribute("icon","/src/resources/svg/shoopingCart_icon.svg");const l=this.ownerDocument.createElement("nav-iconbutton");l.setAttribute("icon","/src/resources/svg/options_icon.svg");const h=this.ownerDocument.createElement("div");h.classList.add("horizontalSpace"),o.appendChild(s),o.appendChild(i),o.appendChild(h),o.appendChild(r),o.appendChild(c),o.appendChild(a),o.appendChild(d),o.appendChild(l),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("nav-bar",s);class i extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,text:null})}constructor(){super(),this.properties={img:"",text:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){switch(e){case"img":this.properties.img=n;break;case"text":this.properties.text=n}}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/categoriesSection/categoriesSectionCard/categoriesSectionCard.css");const o=this.ownerDocument.createElement("div");o.classList.add("categoriesCardContainer");const s=this.ownerDocument.createElement("div");s.classList.add("cardImageContainer");const i=this.ownerDocument.createElement("img");i.classList.add("cardImage"),i.setAttribute("src",`${this.properties.img}`);const r=this.ownerDocument.createElement("p");r.classList.add("categoriesCardText"),r.innerHTML=`${this.properties.text}`,s.appendChild(i),o.appendChild(s),o.appendChild(r),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("categories_section-cards",i);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/categoriesSection/categoriesSection.css");const o=this.ownerDocument.createElement("div");o.setAttribute("id","categoriesContainer");const s=this.ownerDocument.createElement("h2");s.innerHTML="Categories";const i=this.ownerDocument.createElement("div");i.classList.add("cardsContainer");const r=this.ownerDocument.createElement("categories_section-cards");r.setAttribute("img","/src/resources/jpg/categoriesFood.jpg"),r.setAttribute("text","FOOD");const c=this.ownerDocument.createElement("categories_section-cards");c.setAttribute("img","/src/resources/jpg/categoriesSport.jpg"),c.setAttribute("text","SPORTS");const a=this.ownerDocument.createElement("categories_section-cards");a.setAttribute("img","/src/resources/jpg/categoriesKids.jpg"),a.setAttribute("text","KIDS");const d=this.ownerDocument.createElement("categories_section-cards");d.setAttribute("img","/src/resources/jpg/categoriesCamping.jpg"),d.setAttribute("text","CAMPING");const l=this.ownerDocument.createElement("categories_section-cards");l.setAttribute("img","https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg?h=600&iar=0&w=640&rev=2bd4d26e45c54499acab7a4007dbb210&hash=DF30C911968BFFF87F68DCC47D2B169A"),l.setAttribute("text","CLEANING");const h=this.ownerDocument.createElement("categories_section-cards");h.setAttribute("img","https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=2000"),h.setAttribute("text","BAKERY");const p=this.ownerDocument.createElement("categories_section-cards");p.setAttribute("img","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/10/05/fn_sour-candy-ranked-getty_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1664993358924.jpeg"),p.setAttribute("text","CANDIES");const m=this.ownerDocument.createElement("categories_section-cards");m.setAttribute("img","https://blog.natruly.com/wp-content/uploads/2021/04/002-min.jpeg"),m.setAttribute("text","SNACKS");const u=this.ownerDocument.createElement("categories_section-cards");u.setAttribute("img","https://www.a1wineandspirit.com/media/ygbpcrvv/liqueur-large.jpg?width=568&height=378"),u.setAttribute("text","LIQUEUR"),i.appendChild(r),i.appendChild(c),i.appendChild(a),i.appendChild(d),i.appendChild(l),i.appendChild(h),i.appendChild(p),i.appendChild(m),i.appendChild(u),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("categories-section",r);class c extends HTMLElement{static get observedAttributes(){return Object.keys({img:null})}constructor(){super(),this.properties={img:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){"img"===e&&(this.properties.img=n)}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/advertisingSection/advertisingSectionAd/advertisingSectionAd.css");const o=this.ownerDocument.createElement("div");o.classList.add("adContainer");const s=this.ownerDocument.createElement("img");s.setAttribute("src",`${this.properties.img}`),o.appendChild(s),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("advertising_section-ad",c);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/advertisingSection/advertisingSection.css");const o=this.ownerDocument.createElement("section");o.setAttribute("id","advertisingSectionContainer");const s=this.ownerDocument.createElement("advertising_section-ad");s.setAttribute("img","/src/resources/jpg/advertising1.jpg");const i=this.ownerDocument.createElement("advertising_section-ad");i.setAttribute("img","/src/resources/jpg/advertising1.jpg"),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("advertising-section",a);class d extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,title:null,price:null,description:null})}constructor(){super(),this.properties={img:"",title:"",price:"",description:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){switch(e){case"img":this.properties.img=n;break;case"title":this.properties.title=n;break;case"price":this.properties.price=n;break;case"description":this.properties.description=n}}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/recommendedSection/recommendedSectionCard/recommendedSectionCard.css");const o=this.ownerDocument.createElement("div");o.classList.add("recommendCardContainer");const s=this.ownerDocument.createElement("div");s.classList.add("cardImageContainer");const i=this.ownerDocument.createElement("img");i.classList.add("cardImage"),i.setAttribute("src",`${this.properties.img}`);const r=this.ownerDocument.createElement("div");r.classList.add("textContainer");const c=this.ownerDocument.createElement("h2");c.innerHTML=`${this.properties.title}`;const a=this.ownerDocument.createElement("h3");a.innerHTML=`${this.properties.price}`;const d=this.ownerDocument.createElement("p");d.innerHTML=`${this.properties.description}`,s.appendChild(i),o.appendChild(s),r.appendChild(c),r.appendChild(a),r.appendChild(d),o.appendChild(r),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("recommended_section-card",d);const l={recommended:[{img:"https://img.freepik.com/free-vector/realistic-white-plate-isolated_1284-41743.jpg?w=2000",title:"Plates",price:"Cop $23500",description:"Set of 2 ceramics plates"},{img:"https://http2.mlstatic.com/D_NQ_NP_2X_605638-MCO54127766904_032023-F.webp",title:"Harina De Maíz",price:"Cop $18000",description:"Harina de Maíz Harina PAN Blanca 1kg x3 Uds"},{img:"https://http2.mlstatic.com/D_NQ_NP_2X_816444-MCO70237320929_062023-F.webp",title:"Maquina De Afeitar Groomen 500 + 1 Repuesto",price:"Cop $33900",description:"Máquina de afeitar con 5 navajas de alta precisión"},{img:"https://http2.mlstatic.com/D_NQ_NP_2X_699538-MCO69510888045_052023-F.webp",title:"Silla Ejecutiva Ergonómica",price:"Cop $179900",description:"Silla Ejecutiva Ergonómica Reclinable Con Espaldar Grande"},{img:"https://http2.mlstatic.com/D_NQ_NP_2X_795428-MCO53300738016_012023-F.webp",title:"Maletero Tomcat 34lt Litros",price:"COP $99500",description:"El maletero Tomcat de 34 litros te permite recorrer la ciudad sin preocuparte por el equipaje"},{img:"https://http2.mlstatic.com/D_NQ_NP_2X_933606-MLA53057320829_122022-F.webp",title:"Set de construcción Lego Minecraft La Emboscada del Creeper",price:"COP $79900",description:"El set Lego Minecraft te permitirá construir e interpretar aventuras inspiradas en el universo Minecraft"}],search:[{img:"https://www.chocolatecorona.com/sites/default/files/2022-12/chips_5.png",title:"Cookie dough Corona",price:"Cop $23500",description:"Make delicious desserts, cookies, milkshakes or make decorations with our Corona chocolate chips. They are delicious and very easy to use."},{img:"https://m.media-amazon.com/images/I/61RVXohcPXL._AC_SX679_.jpg",title:"Quest Dipped and Mini Bundle, chocolate chip cookie dough",price:"Cop $33700",description:"Quest Dipped Chocolate Cookie Dough Protein Bar tastes like a spoonful of cookie dough fresh from the bowl. Only our version is packed with chocolate-flavored chips, then dipped and topped with chocolate drizzle, and has 18g of protein, 4g of net carbs, and 1g of sugar per serving."},{img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-V2wcY6dM--lAlqgjiZuUojd4nKz8qZlQGkk-n08eeVTWJFd1Ge45-AGQ4DlpyzKpP2JXi7UHWE5HBDCC_mo3en9jMpH7&usqp=CAY",title:"Orso Ice Cream Caramel Cookie Dough Flavor",price:"Cop $26000",description:"A dessert after lunch is always a good idea. Orso ice cream caramel cookie dough"}]};class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/recommendedSection/recommendedSection.css");const o=this.ownerDocument.createElement("section");o.setAttribute("id","recommendedContainer");const s=this.ownerDocument.createElement("h2");s.innerHTML="Recommended for you";const i=this.ownerDocument.createElement("div");i.classList.add("recommendedCardsContainer"),o.appendChild(s),o.appendChild(i),l.recommended.map((e=>{const t=this.ownerDocument.createElement("recommended_section-card");t.setAttribute("img",`${e.img}`),t.setAttribute("title",`${e.title}`),t.setAttribute("price",`${e.price}`),t.setAttribute("description",`${e.description}`),i.appendChild(t)})),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("recommended-section",h);class p extends HTMLElement{static get observedAttributes(){return Object.keys({title:null,desc:null,opt_default:null,opt1:null,opt2:null})}constructor(){super(),this.properties={title:"",desc:"",opt_default:"",opt1:"",opt2:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){switch(e){case"title":this.properties.title=n;break;case"desc":this.properties.desc=n;break;case"opt_default":this.properties.opt_default=n;break;case"opt1":this.properties.opt1=n;break;case"opt2":this.properties.opt2=n}}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/searchPage/optionsInformation/searchOption/searchOption.css");const o=this.ownerDocument.createElement("div");o.classList.add("optionContainer");const s=this.ownerDocument.createElement("p");s.setAttribute("id","optionTitle"),s.innerHTML=`${this.properties.title}`;const i=this.ownerDocument.createElement("div");i.setAttribute("id","optionSelectorContainer");const r=this.ownerDocument.createElement("select"),c=this.ownerDocument.createElement("option");c.innerHTML=`${this.properties.opt_default}`;const a=this.ownerDocument.createElement("option");a.innerHTML=`${this.properties.opt1}`;const d=this.ownerDocument.createElement("option");d.innerHTML=`${this.properties.opt2}`,r.appendChild(c),r.appendChild(a),r.appendChild(d),i.appendChild(r),o.append(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("search--option",p);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/searchPage/optionsInformation/optionsInformation.css");const o=this.ownerDocument.createElement("div");o.setAttribute("id","optionsInformationContainer");const s=this.ownerDocument.createElement("h3");s.innerHTML="Search options";const i=this.ownerDocument.createElement("search--option");i.setAttribute("title","Price"),i.setAttribute("desc","No option selected"),i.setAttribute("opt_default","No option selected"),i.setAttribute("opt1","From cheap to expensive"),i.setAttribute("opt2","From expensive to cheap"),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("options-information",m);class u extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,title:null,price:null,desc:null})}constructor(){super(),this.properties={img:"",title:"",price:"",desc:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){switch(e){case"img":this.properties.img=n;break;case"title":this.properties.title=n;break;case"price":this.properties.price=n;break;case"desc":this.properties.desc=n}}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/searchPage/searchResultsCard/searchResultsCard.css");const o=this.ownerDocument.createElement("div");o.classList.add("cardResultCotainer");const s=this.ownerDocument.createElement("div");s.classList.add("productImgContainer");const i=this.ownerDocument.createElement("div");i.classList.add("productInfoContainer");const r=this.ownerDocument.createElement("img");r.setAttribute("src",`${this.properties.img}`),s.appendChild(r);const c=this.ownerDocument.createElement("h2");c.innerHTML=`${this.properties.title}`;const a=this.ownerDocument.createElement("h3");a.innerHTML=`${this.properties.price}`;const d=this.ownerDocument.createElement("p");d.innerHTML=`${this.properties.desc}`,i.appendChild(c),i.appendChild(a),i.appendChild(d),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}var g;customElements.define("search_results-card",u);const w=window.location.search,b=null===(g=new URLSearchParams(w).get("search"))||void 0===g?void 0:g.toLowerCase();class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/components/searchPage/searchPage.css");const n=this.ownerDocument.createElement("nav-bar"),o=this.ownerDocument.createElement("div");o.setAttribute("id","mainSearchContainer");const s=this.ownerDocument.createElement("div");s.setAttribute("id","optionsContainer");const i=this.ownerDocument.createElement("div");i.setAttribute("id","resultsContainer");const r=this.ownerDocument.createElement("h2"),c=this.ownerDocument.createElement("options-information");r.innerHTML=`Results for "${b}"...`,l.search.map((e=>{if(e.title.toLowerCase().includes(b)){const t=this.ownerDocument.createElement("search_results-card");t.setAttribute("img",`${e.img}`),t.setAttribute("title",`${e.title}`),t.setAttribute("price",`${e.price}`),t.setAttribute("desc",`${e.description}`),i.appendChild(t)}})),s.appendChild(r),s.appendChild(c),o.appendChild(s),o.appendChild(i),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t),this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(o)}}}customElements.define("search-page",C);class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/components/landingPage/navBar/navBar.css"),this.shadowRoot.innerHTML='\n                <div id="navbar">\n                    <img src="/src/resources/svg/logo_dark_v.svg" alt="logoNav" /> \n                    <button id="sign-up">sign-up</button>\n                    <button id="login">login</button>\n                </div>\n            ',this.shadowRoot.appendChild(e)}}}customElements.define("nav-barlanding",v);class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/components/landingPage/moreInfoSection/moreInfoSection.css"),this.shadowRoot.innerHTML='\n                <div class="more-info-container">\n                    <div class="more-info-content">\n                        <h2>A close feeling!</h2>\n                        <p>The strong feeling of control and closeness of yout city in the comoddity of yout house. Take the trends of your shopping with a transparent advertaiment of products and clean sellers.</p>\n                        <img src="/src/resources/jpg/hermosa-chica-rubia-cierra-ojos-sonriendo-sonando-rezando-o-pidiendo-deseos-anticipando-algo-hermoso-sonando-despierto-pie-contra-fondo-blanco-camiseta 1.png" /> \n                        <button id="read-more">Know more...</button>\n                    </div>\n                </div>\n            ';const t=this.shadowRoot.querySelector("#read-more");t?t.addEventListener("click",(()=>{console.log("Leer más")})):console.error('El botón "Leer más" no se encontró'),this.shadowRoot.appendChild(e)}}}customElements.define("more-infosection",E);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/components/landingPage/descriptionSection/descriptionSection.css"),this.shadowRoot.innerHTML='\n                <div class="description-container">\n                    <div class="description-content">\n                        <h1>Your new market page!</h1>\n                        <p>A place where you can buy everything you need with that close feeling of neighborhood.</p>\n                        <img src="/src/resources/jpg/mujer-posando-saltando-sosteniendo-bolsas-compra 1.png"/> \n                        <div class="action-buttons">\n                            <button id="shop">Go to store!</button>\n                            <button id="create-account">Create free account</button>\n                        </div>\n                    </div>\n                </div>\n            ',this.shadowRoot.querySelector("#shop").addEventListener("click",(()=>{console.log("Ir a la tienda")})),this.shadowRoot.querySelector("#create-account").addEventListener("click",(()=>{console.log("Crear cuenta")})),this.shadowRoot.appendChild(e)}}}customElements.define("description-section",f);class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/components/landingPage/moreInfoSectiontwo/moreInfoSectiontwo.css"),this.shadowRoot.innerHTML='\n                <div class="more-info-containertwo">\n                    <div class="more-info-content">\n                        <h2>Brand new things for your home!</h2>\n                        <p>Find everything you would need for the commodities of your place. Buy all sort of furniture and decorations to make your house feel like yours.</p>\n                        <img src="/src/resources/jpg/comodo-sillon-gris-aislado-sobre-fondo-blanco 1.png" /> \n                    </div>\n                </div>\n            ',this.shadowRoot.appendChild(e)}}}customElements.define("more-infosectiontwo",A);class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=this.ownerDocument.createElement("link");if(e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/components/landingPage/landingPage.css"),this.shadowRoot){const t=this.ownerDocument.createElement("nav-barlanding"),n=this.ownerDocument.createElement("description-section"),o=this.ownerDocument.createElement("more-infosection"),s=this.ownerDocument.createElement("more-infosectiontwo");this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(o),this.shadowRoot.appendChild(s),this.shadowRoot.appendChild(e)}}}customElements.define("landing-page",D);class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(null!=this.shadowRoot||null!=this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/appContainer.css");const t=this.ownerDocument.createElement("nav-bar"),n=this.ownerDocument.createElement("categories-section"),o=this.ownerDocument.createElement("advertising-section"),s=this.ownerDocument.createElement("recommended-section");this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(o),this.shadowRoot.appendChild(s)}}}customElements.define("app-container",k)})();