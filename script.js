document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${productName} - RD$${productPrice}</p>
            `;

            if (cartItems.querySelector("p")) {
                cartItems.innerHTML = ""; 
            }
            cartItems.appendChild(cartItem);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = [];  

    function addToCart(name, price) {
        const product = { name, price };

        cart.push(product);

        updateCartUI();
    }

    function updateCartUI() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            cartItemsContainer.innerHTML = '<ul>' +
                cart.map(item => `<li>${item.name} - RD$${item.price}</li>`).join('') +
                '</ul>';
        }
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });
});
