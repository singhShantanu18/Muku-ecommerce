import { addToCart, cartQuantity } from "./data/cart.js";
import { products } from "./data/product.js";

renderProducts();
function renderProducts(){
    let productsHtml = ''
    for(let i = 0; i < products.length; i++){
        const productObject = products[i];
        const image = productObject.image;
        const name = productObject.name;
        const price = productObject.priceRupee;

        const html  = `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${name}
            </div>

            <div class="product-price">
              ${(price).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select class = "js-quantitySelector-${productObject.id} quantitybox">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-message-${productObject.id}">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id = "${productObject.id}">
              Add to Cart
            </button>
          </div>`;
        productsHtml += html;
    }
    document.querySelector('.js-products-grid').innerHTML = productsHtml;


    document.querySelectorAll('.js-add-to-cart')
      .forEach((button) => {
        button.addEventListener('click' , () =>{
          const productId = button.dataset.productId;
          addToCart(productId)
          let cartWeight = cartQuantity();
          console.log(cartWeight)
          document.querySelector('.js-cart-quantity').innerHTML = cartWeight
        })
      })
}