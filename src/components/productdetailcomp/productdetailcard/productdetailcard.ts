export class ProductDetailCard extends HTMLElement {
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
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/productdetailcomp/productdetailcard/productdetailcard.css");
            this.shadowRoot.appendChild(link);

            const cardContainer = document.createElement("div");
            cardContainer.setAttribute("class", "card-container");
            this.shadowRoot.appendChild(cardContainer);

            // Div para la imagen
            const imageContainer = document.createElement("div");
            imageContainer.setAttribute("class", "image-container");
            cardContainer.appendChild(imageContainer);

            const image = document.createElement("img");
            image.setAttribute("src", "/src/resources/jpg/image 16.png");
            image.setAttribute("alt", "Product Image");
            imageContainer.appendChild(image);

            // Div para el contenido
            const contentContainer = document.createElement("div");
            contentContainer.setAttribute("class", "content-container");
            cardContainer.appendChild(contentContainer);

            const title = document.createElement("h1");
            title.textContent = "Cookie dough chocolate chips corona 250g";
            contentContainer.appendChild(title);

            const price = document.createElement("h2");
            price.textContent = "COP $23,500";
            contentContainer.appendChild(price);



            const ratingContainer = document.createElement("div");
            ratingContainer.setAttribute("class", "rating-container");
            contentContainer.appendChild(ratingContainer);

            // Append 5 star images to the rating container
            for (let i = 0; i < 5; i++) {
                const star = document.createElement("img");
                star.setAttribute("src", "/src/resources/svg/Star 1.svg");
                star.setAttribute("alt", "Star");
                ratingContainer.appendChild(star);

            }

            const rating = document.createElement("h3");
            rating.textContent = "4.0";
            ratingContainer.appendChild(rating);


            const descriptionTitle = document.createElement("h3");
            descriptionTitle.textContent = "Description";
            contentContainer.appendChild(descriptionTitle);


            const description = document.createElement("p");
            description.textContent = "Prepare delicious desserts, cookies, milkshakes or make decorations with our Corona chocolate chips. They are delicious and very easy to use.";
            contentContainer.appendChild(description);


            const purchaseButton = document.createElement("button");
            purchaseButton.textContent = "Purchase now";
            contentContainer.appendChild(purchaseButton);


            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Add to cart";
            contentContainer.appendChild(addToCartButton);


        }
    }
}
customElements.define('product-detailcard', ProductDetailCard);
