document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart');
    const cartProducts = document.querySelector('.cart__products');

    let cartItems = [];

    function changeQuantity(product, delta) {
        const quantityValue = product.querySelector('.product__quantity-value');
        let currentQuantity = parseInt(quantityValue.textContent);
        currentQuantity = Math.max(1, currentQuantity + delta); 
        quantityValue.textContent = currentQuantity;
    }

    function addToCart(product) {
        const productID = product.getAttribute('data-id');
        const image = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        const existingItem = cartItems.find(item => item.id === productID);

        if (existingItem) {

            existingItem.quantity += quantity;
        } else {
            cartItems.push({ id: productID, image, quantity });
        }

        renderCart();
    }

    function removeFromCart(productID) {
        cartItems = cartItems.filter(item => item.id !== productID);
        renderCart();
    }

    function renderCart() {
        cartProducts.innerHTML = '';

        cartItems.forEach(item => {
            const cartProductHTML = `
                <div class="cart__product" data-id="${item.id}">
                    <img class="cart__product-image" src="${item.image}">
                    <div class="cart__product-count">${item.quantity}</div>
                    <button class="cart__product-remove">Удалить</button>
                </div>
            `;
            cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
        });

        const removeButtons = document.querySelectorAll('.cart__product-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productID = this.closest('.cart__product').getAttribute('data-id');
                removeFromCart(productID);
            });
        });


        if (cartItems.length === 0) {
            cart.classList.add('hidden');
        } else {
            cart.classList.remove('hidden');
        }
    }


    products.forEach(product => {

        product.querySelector('.product__add').addEventListener('click', () => {
            addToCart(product);
        });

        product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            changeQuantity(product, 1);
        });

        product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            changeQuantity(product, -1);
        });
    });


    if (cartItems.length === 0) {
        cart.classList.add('hidden');
    }
});