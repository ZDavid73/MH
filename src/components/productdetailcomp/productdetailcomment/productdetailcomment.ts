export class ProductDetailComments extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot != null || this.shadowRoot != undefined) {
            const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/components/productdetailcomp/productdetailcomment/productdetailcomment.css");
        this.shadowRoot.appendChild(link);

        const commentsContainer = document.createElement("div");
        commentsContainer.setAttribute("class", "comments-container");
        this.shadowRoot.appendChild(commentsContainer);

        const title = document.createElement("h1");
        title.textContent = "Questions and Answers";
        commentsContainer.appendChild(title);

        const questionWrapper = document.createElement("div");
questionWrapper.setAttribute("class", "question");
commentsContainer.appendChild(questionWrapper);

        const profileImage = document.createElement("img");
        profileImage.setAttribute("src", "/src/resources/jpg/account_circle_FILL1_wght400_GRAD0_opsz48 1.png");
        profileImage.setAttribute("alt", "Profile Image");
        commentsContainer.appendChild(profileImage);

        const question = document.createElement("p");
        question.textContent = "What's the key ingredient in a classic cookie dough recipe?";
        commentsContainer.appendChild(question);

        const answer = document.createElement("p");
        answer.setAttribute("class", "answer");
        answer.textContent = "The key ingredient in a classic cookie dough recipe is all-purpose flour.";
        commentsContainer.appendChild(answer);


    }
}
}
customElements.define('product-comments', ProductDetailComments);
