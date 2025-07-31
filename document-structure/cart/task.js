document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart');
    const cartProducts = document.querySelector('.cart__products');

    // Массив для хранения товаров в корзине
    let cartItems = [];

    // Функция для изменения количества товара
    function changeQuantity(product, delta) {
        const quantityValue = product.querySelector('.product__quantity-value');
        let currentQuantity = parseInt(quantityValue.textContent);
        currentQuantity = Math.max(1, currentQuantity + delta); // Минимальное количество — 1
        quantityValue.textContent = currentQuantity;
    }

    // Функция для добавления товара в корзину
    function addToCart(product) {
        const productID = product.getAttribute('data-id');
        const image = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        // Проверяем, есть ли товар в корзине
        const existingItem = cartItems.find(item => item.id === productID);

        if (existingItem) {
            // Если товар уже есть, увеличиваем количество
            existingItem.quantity += quantity;
        } else {
            // Если товара нет, добавляем новый
            cartItems.push({ id: productID, image, quantity });
        }

        // Анимация перемещения товара в корзину
        const productImage = product.querySelector('.product__image');
        const productShadow = productImage.cloneNode(true);
        productShadow.classList.add('product-shadow');
        productShadow.style.position = 'absolute';
        productShadow.style.left = productImage.offsetLeft + 'px';
        productShadow.style.top = productImage.offsetTop + 'px';
        document.body.appendChild(productShadow);

        const cartPosition = cart.getBoundingClientRect();
        const animationDuration = 500; // Длительность анимации в миллисекундах

        productShadow.animate([
            { transform: `translate(${productImage.offsetLeft}px, ${productImage.offsetTop}px)` },
            { transform: `translate(${cartPosition.left + window.scrollX}px, ${cartPosition.top + window.scrollY}px)` }
        ], {
            duration: animationDuration,
            fill: 'forwards'
        });

        setTimeout(() => {
            productShadow.remove();
            renderCart();
        }, animationDuration);
    }

    // Функция для удаления товара из корзины
    function removeFromCart(productID) {
        cartItems = cartItems.filter(item => item.id !== productID);
        renderCart();
    }

    // Функция для рендеринга корзины
    function renderCart() {
        cartProducts.innerHTML = '';

        cartItems.forEach(item => {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.setAttribute('data-id', item.id);

            const image = document.createElement('img');
            image.classList.add('cart__product-image');
            image.src = item.image;

            const count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = item.quantity;

            const removeButton = document.createElement('button');
            removeButton.classList.add('cart__product-remove');
            removeButton.textContent = 'Удалить';
            removeButton.addEventListener('click', () => {
                removeFromCart(item.id);
            });

            cartProduct.appendChild(image);
            cartProduct.appendChild(count);
            cartProduct.appendChild(removeButton);
            cartProducts.appendChild(cartProduct);
        });

        // Скрываем корзину, если она пуста
        if (cartItems.length === 0) {
            cart.classList.add('hidden');
        } else {
            cart.classList.remove('hidden');
        }
    }

    // Инициализация поведения
    products.forEach(product => {
        // Кнопка добавления в корзину
        product.querySelector('.product__add').addEventListener('click', () => {
            addToCart(product);
        });

        // Кнопка увеличения количества
        product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            changeQuantity(product, 1);
        });

        // Кнопка уменьшения количества
        product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            changeQuantity(product, -1);
        });
    });

    // Изначально скрываем корзину, если она пуста
    if (cartItems.length === 0) {
        cart.classList.add('hidden');
    }
});