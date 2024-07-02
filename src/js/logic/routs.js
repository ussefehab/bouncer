// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the cart link element
    const cartLink = document.getElementById('cart-link');
    // Select all elements with the class 'products-link'
    const productsLink = document.querySelectorAll('.products-link');
    // Select all elements with the class 'product-link'
    const productLink = document.querySelectorAll('.product-link');
    // Select all elements with the class 'product-link-i'
    const productLinkIcon = document.querySelectorAll('.product-link-i');
  
    // Add event listener to the cart link if it exists
    if (cartLink) {
      cartLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'cart.html'; // Redirect to the cart page
      });
    }
  
    // Add event listeners to all product link elements
    const addProductLinkListeners = (elements, url) => {
      elements.forEach(element => {
        element.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          window.location.href = url; // Redirect to the specified URL
        });
      });
    };
  
    // Add event listeners to 'products-link' elements to redirect to 'products.html'
    if (productsLink) {
      addProductLinkListeners(productsLink, 'products.html');
    }
  
    // Add event listeners to 'product-link-i' elements to redirect to 'cart-product.html'
    if (productLinkIcon) {
      addProductLinkListeners(productLinkIcon, 'cart-product.html');
    }
  
    // Add event listeners to 'product-link' elements to redirect to 'cart-product.html'
    if (productLink) {
      addProductLinkListeners(productLink, 'cart-product.html');
    }
  });
  