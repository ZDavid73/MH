import "../../components/export"

export class ProductDetail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }



    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/pages/productDetail/productDetail.css");
            this.shadowRoot.appendChild(link);
    
            const mainContainer = this.ownerDocument.createElement("section");
            mainContainer.setAttribute("id", "ProductDetail");
            mainContainer.style.backgroundColor = '#F24333'; // This sets the background color
            this.shadowRoot.appendChild(mainContainer);

            const navBar = this.ownerDocument.createElement("navbar-white")
mainContainer.appendChild(navBar)
    
            // Create a div for card details
            const cardDetailDiv = this.ownerDocument.createElement('div');
            cardDetailDiv.classList.add('card-detail-container');
    
            const productDetailCard = this.ownerDocument.createElement('product-detailcard');
            productDetailCard.classList.add('carddetail');
            cardDetailDiv.appendChild(productDetailCard);
    
            // Create a div for comments
            const commentsDiv = this.ownerDocument.createElement('div');
            commentsDiv.classList.add('comments-container');
    
            const productComments = this.ownerDocument.createElement('product-comments');
            productComments.classList.add('cardcomments');
            commentsDiv.appendChild(productComments);
    
            // Append the new divs to the main container
            mainContainer.appendChild(cardDetailDiv);
            mainContainer.appendChild(commentsDiv);
        }
    }
    
}
customElements.define('product-detail', ProductDetail);


