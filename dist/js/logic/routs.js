const cartLink = document.getElementById('cart-link');
const productsLink = document.querySelectorAll('.products-link');
const productLink = document.querySelectorAll('.product-link');
const productLinkIcon = document.querySelectorAll('.product-link-i');
if (cartLink) {
cartLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'cart.html';
});
}
if (productsLink) {
productsLink.forEach(l=>{
    l.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'products.html';
    });
})
}
if (productLinkIcon) {
productLinkIcon.forEach(l=>{
    l.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'cart-product.html';
    });
})
}
if (productLink) {
productLink.forEach(l=>{l.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'cart-product.html';
});})
}
