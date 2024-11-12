let cart = [];

function addToCart(dishName, price) {
    cart.push({ dishName, price });
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.length;
    const cartLink = document.querySelector(".cart-link");
    cartLink.textContent = `Cart (${cartCount})`;
}
