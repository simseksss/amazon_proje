// Sepete ekleme işlevi
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' sepete eklendi!');
}

// Sepeti görüntüleme işlevi
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Sepetiniz boş.</p>';
    } else {
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartContainer.appendChild(cartItem);
        });
    }
}
